import React, { createContext, useState, useContext, useEffect } from "react";
import ConnectWallet from "../connect-wallet";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import detectEthereumProvider from "@metamask/detect-provider";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [provider, setprovider] = useState();
  const value = {
    isAuthenticated,
    setisAuthenticated,
  };

  useEffect(() => {
    detectEthereumProviderMetamask();
  }, []);

  const detectEthereumProviderMetamask = async () => {
    // this returns the provider, or null if it wasn't detected
    const response = await detectEthereumProvider();
    setprovider(response);
    if (response) {
      if (response == window.ethereum) {
        const chainId = await response.request({ method: "eth_chainId" });
        console.log(chainId);
        // handleChainChanged(chainId);
        handleUserAccount(response);
        // listners
        response.on("chainChanged", handleChainChanged);
        response.on("accountsChanged", handleAccountsChanged);
      } else {
        console.error("Do you have multiple wallets installed?");
      }
    } else {
      console.log("Please install MetaMask!");
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
    // console.log(accounts);
    if (accounts.length === 0) {
      // alert and call connect on click confirmation
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
      // Do any other work!
    }
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
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
