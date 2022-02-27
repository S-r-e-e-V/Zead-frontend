import React, { useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import { SimpleAlert } from "../Utils/alert-templates";
import { AuthContext } from "./context/AuthContext";
import { useRouter } from "next/router";

const wallets = [
  // {
  //   title: "coibase",
  //   p: "wallet that works on both mobile and through a browser extension",
  //   popup: "connected",
  // },
  {
    title: "metamask",
    p: "A browser extension with great flexibility. The web's popular wallet",
    popup: "error",
  },
  // {
  //   title: "torus",
  //   p: "Log in with Google,  Facebook,Twitter or other OAuth providers",
  //   popup: "connected",
  // },
  // {
  //   title: "fortmatic",
  //   p: "wallet that allows you to  sign up with your phone number ",
  //   popup: "error",
  // },
  // {
  //   title: "bitski",
  //   p: "wallet that allows you to  sign in with an email and password",
  //   popup: "connected",
  // },
  // {
  //   title: "walletconnect",
  //   p: "Log in with Google,  Facebook, or other OAuth provider",
  //   popup: "error",
  // },
];

const ConnectWallet = () => {
  const router = useRouter();
  const { provider, setisAuthenticated } = useContext(AuthContext);
  let currentAccount = null;
  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // alert and call connect on click confirmation
      // MetaMask is locked or the user has not connected any accounts
      SimpleAlert(
        "Connect to Metamask",
        "Please connect to MetaMask",
        () => {}
      );
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
      console.log(currentAccount);
      setisAuthenticated(true);
      router.push("/profile");
      // Do any other work!
    }
  };
  const connect = () => {
    if (provider) {
      provider
        .request({ method: "eth_requestAccounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.

            SimpleAlert(
              "Connection error",
              "Please connecct to metamask to login"
            );
          } else {
            console.log(err);
            SimpleAlert("Something went wrong", "Please login to metamask");
          }
        });
    } else {
      SimpleAlert(
        "Sorry Couldn't detect Metamask",
        "Makesure metamask is installed."
      );
    }
  };
  const options = {
    mustBeMetaMask: true,
    silent: false,
    timeout: 3000,
  };
  // const ref = useRef();
  // const closeTooltip = () => ref.current.close();
  return (
    <div className="effect">
      <div className="container">
        <div>
          <Link href="/">
            <a className="btn btn-white btn-sm mt-20">Back to home</a>
          </Link>
          <div className="hero__wallets pt-100 pb-50">
            <div className="space-y-20 d-flex flex-column align-items-center">
              <div className="logo position-relative">
                <Image
                  src={`/assets/images/zead-logo.svg`}
                  layout="fill"
                  alt="ImgPreview"
                />
              </div>
              <h2 className="text-center">Connect your wallet</h2>
              <p className="text-center">
                Connect with one of available wallet providers or create a new
                wallet.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="wallets">
              <div className="row mb-20_reset">
                {wallets.map((val, i) => (
                  <div className="col-lg-4" key={i}>
                    <button
                      className="box in__wallet space-y-10"
                      onClick={() => connect()}
                    >
                      <div className="logo position-relative">
                        <Image
                          src={`/assets/images/icons/${val.title}.svg`}
                          alt="logo_community"
                          width={"100%"}
                          height={"100%"}
                        />
                      </div>
                      <h5 className="text-center">{val.title}</h5>
                      <p className="text-center">{val.p}</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
