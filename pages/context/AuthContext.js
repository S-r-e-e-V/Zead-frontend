import React, { createContext, useState, useContext, useEffect } from "react";
import ConnectWallet from "../connect-wallet";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import detectEthereumProvider from "@metamask/detect-provider";
import Spinner from "../../components/Spinner";
import { SimpleAlert } from "../../Utils/alert-templates";
import MetaMaskOnboarding from "@metamask/onboarding";

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [provider, setprovider] = useState();

  useEffect(() => {
    detectEthereumProviderMetamask();
  }, []);
  const detectEthereumProviderMetamask = async () => {
    // this returns the provider, or null if it wasn't detected
    setisLoading(true);
    const response = await detectEthereumProvider();
    setisLoading(false);
    console.log(response);
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
        SimpleAlert(
          "Warning",
          "Do you have multiple wallets installed? Connect to metamask.",
          () => {},
          false
        );
      }
    } else {
      SimpleAlert(
        "Warning",
        "Please install metamask",
        () => {
          const onboarding = new MetaMaskOnboarding();
          onboarding.startOnboarding();
        },
        false
      );
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
  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // alert and call connect on click confirmation
      // MetaMask is locked or the user has not connected any accounts
      SimpleAlert("Connect to Metamask", "Please connect to MetaMask", () => {
        setisAuthenticated(false);
      });
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
      console.log(currentAccount);
      setisAuthenticated(true);
      // Do any other work!
    }
  }
  const value = {
    isAuthenticated,
    setisAuthenticated,
    isLoading,
    setisLoading,
    provider,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated && router.pathname !== "/connect-profile") {
    return (
      <Layout>
        <ConnectWallet />
      </Layout>
    );
  }
  return children;
};
export const Loading = ({ children }) => {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useContext(AuthContext);
  if (isLoading) {
    return <Spinner />;
  }
  return children;
};
