import React, { createContext, useState, useContext, useEffect } from "react";
import ConnectWallet from "../connect-wallet";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import detectEthereumProvider from "@metamask/detect-provider";
import Spinner from "../../components/Spinner";
import Alert from "../../Utils/alert-templates";
import MetaMaskOnboarding from "@metamask/onboarding";

import { postData } from "../api";

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [userData, setUserData] = useState({ walletAddress: "", userId: "" });
  const [isLoading, setisLoading] = useState(false);
  const [provider, setprovider] = useState();

  useEffect(() => {
    detectEthereumProviderMetamask();
  }, []);
  const detectEthereumProviderMetamask = async () => {
    // this returns the provider, or null if it wasn't detected
    setisLoading(true);
    const response = await detectEthereumProvider();
    setprovider(response);
    if (response) {
      if (response == window.ethereum) {
        // const chainId = await response.request({ method: "eth_chainId" });
        // console.log(chainId);
        // handleChainChanged(chainId);
        handleUserAccount(response);
        // listners
        response.on("chainChanged", handleChainChanged);
        response.on("accountsChanged", handleAccountsChanged);
      } else {
        setisLoading(false);
        Alert({
          title: "Warning",
          message:
            "Do you have multiple wallets installed? Connect to metamask.",
          buttonTextYes: "Ok",
          closeOnClickOutside: false,
        });
      }
    } else {
      setisLoading(false);
      Alert({
        title: "Warning",
        message: "Please install metamask",
        handleClickYes: () => {
          const onboarding = new MetaMaskOnboarding();
          onboarding.startOnboarding();
        },
        buttonTextYes: "Ok",
        closeOnClickOutside: false,
      });
    }
  };
  let currentAccount = null;
  function handleChainChanged(_chainId) {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
  }
  const handleUserAccount = async (provider) => {
    provider
      .request({ method: "eth_accounts" })
      .then(handleAccountsChanged)
      .catch((err) => {
        setisLoading(false);
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });
  };
  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.

  // For now, 'eth_accounts' will continue to always return an array
  const postWalletAddress = async (currentAccount) => {
    try {
      let payload = {
        wallet_address: currentAccount,
      };
      const response = await postData(`/nft/new_user`, payload);
      setisLoading(false);
      if (response) {
        setUserData({
          walletAddress: currentAccount,
          userId: response.user_id,
        });
        localStorage.setItem("waller_id", response.user_id);
        setisAuthenticated(true);
      }
    } catch (err) {
      Alert({
        title: "Something went work",
        message: err.response.error.message,
      });
    }
  };
  async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // alert and call connect on click confirmation
      // MetaMask is locked or the user has not connected any accounts
      setisLoading(false);
      setUserData({ walletAddress: "", userId: "" });
      setisAuthenticated(false);
      Alert({
        title: "Connect to Metamask",
        message: "Please connect to MetaMask",
        buttonTextYes: "Ok",
      });
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
      await postWalletAddress(currentAccount);
      // Do any other work!
    }
  }
  const value = {
    isAuthenticated,
    setisAuthenticated,
    isLoading,
    setisLoading,
    provider,
    userData,
    setUserData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated && router.pathname !== "/connect-wallet") {
    return (
      <Layout>
        <ConnectWallet />
      </Layout>
    );
  }
  return children;
};
export const Loading = ({ children }) => {
  const { isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Spinner />;
  }
  return children;
};
