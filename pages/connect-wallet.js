import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const wallets = [
  {
    title: "coibase",
    p: "wallet that works on both mobile and through a browser extension",
    popup: "connected",
  },
  {
    title: "metamask",
    p: "A browser extension with great flexibility. The web's popular wallet",
    popup: "error",
  },
  {
    title: "torus",
    p: "Log in with Google,  Facebook,Twitter or other OAuth providers",
    popup: "connected",
  },
  {
    title: "fortmatic",
    p: "wallet that allows you to  sign up with your phone number ",
    popup: "error",
  },
  {
    title: "bitski",
    p: "wallet that allows you to  sign in with an email and password",
    popup: "connected",
  },
  {
    title: "walletconnect",
    p: "Log in with Google,  Facebook, or other OAuth provider",
    popup: "error",
  },
];

const ConnectWalllet = () => {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
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
                    <Popup
                      className="custom"
                      ref={ref}
                      trigger={
                        <button className="box in__wallet space-y-10">
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
                      }
                      position="bottom center"
                    >
                      <div>
                        <div
                          className="popup"
                          id="popup_bid"
                          tabIndex={-1}
                          role="dialog"
                          aria-hidden="true"
                        >
                          <div>
                            <button
                              type="button"
                              className="button close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={closeTooltip}
                            >
                              <span aria-hidden="true">×</span>
                            </button>

                            <div className="space-y-20">
                              <h3 className="text-center">Wallet Connected!</h3>
                              <p className="text-center">
                                You have sucessfully connected your wallet, now
                                you can start bidding or upload your own art!
                              </p>
                              <div className="d-flex justify-content-center space-x-20">
                                <Link href="marketplace">
                                  <a className="btn btn-dark">
                                    Discover Assets
                                  </a>
                                </Link>
                                <Popup
                                  className="custom"
                                  ref={ref}
                                  trigger={
                                    <button className="btn btn-grad">
                                      Create item
                                    </button>
                                  }
                                  position="bottom center"
                                >
                                  <div>
                                    <div
                                      className="popup"
                                      id="popup_bid"
                                      tabIndex={-1}
                                      role="dialog"
                                      aria-hidden="true"
                                    >
                                      <div>
                                        <button
                                          type="button"
                                          className="button close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                          onClick={closeTooltip}
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="space-y-20">
                                          <h3 className="color_red">Error!</h3>
                                          <p>
                                            User rejected the request.. <br />
                                            If the problem persist please
                                            Contact support
                                          </p>
                                          <Link href="#">
                                            <a className="btn btn-lg btn-primary">
                                              Try again
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popup>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popup>
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

export default ConnectWalllet;
