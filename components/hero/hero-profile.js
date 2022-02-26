import React, {useRef, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Popup from 'reactjs-popup';

const HeroProfile = () => {
  const ref = useRef();
  const [isActive, setActive] = useState(false);
  const toggleFollow = () => {
    setActive(!isActive);
  };
  const [isShare, setShare] = useState(false);

  const toggleShare = () => {
    setShare(!isShare);
  };
  const [isMore, setMore] = useState(false);

  const toggleMore = () => {
    setMore(!isMore);
  };

  return (
    <div className="mb-100">
      <div className="hero__profile">
        <div className="cover position-relative">
          <Image src="/assets/images/bg/prrofile.png" layout="fill" alt="ImgPreview" />
        </div>
        <div className="infos">
          <div className="container">
            <div className="row flex-wrap align-items-center justify-content-between sm:space-y-75">
              <div className="col-md-6">
                <div className="avatars d-flex position-absolute space-x-20 align-items-center">
                    <div className="position-relative mt-n4">
                      <Image
                        className="w-100 h-100 rounded-3 border-white border border-4 rounded-circle"
                        src="/assets/images/avatars/avatar_4.png"
                        alt="avatar"
                        width='130px' height='130px' objectFit='cover'
                      />
                    </div>
                    <h5 className='mt-n4'>@ayoub fennouni</h5>
                </div>
              </div>
              <div className="col-md-6 d-md-flex justify-content-end">
                <div className="d-sm-flex flex-wrap align-items-center space-x-20 mb-20_reset d-sm-block">
                  <div className="mb-20">
                    <div className="copy">
                      <span className="color_text"> 13b9ebda0178... </span>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center space-x-20">
                    <div className="mb-20">
                      <div
                        className={`btn btn-dark btn-sm ${
                          isActive ? 'btn-prim' : null
                        } `}
                        onClick={toggleFollow}>
                        Follow{isActive ? 'ing' : null}
                      </div>
                    </div>
                    <div className="mb-20">
                      <div className="share">
                        <div className="icon" onClick={toggleShare}>
                          <i className="ri-share-line"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isShare ? 'visible' : null
                          } `}>
                          <ul className="space-y-10">
                            <li>
                            <Link href="https://www.facebook.com/" rel="noreferrer"  target="_blank"><a>
                                <i className="ri-facebook-line"></i>
                              </a></Link>
                            </li>
                            <li>
                            <Link href="https://www.messenger.com/" rel="noreferrer"  target="_blank"><a>
                                <i className="ri-messenger-line"></i>
                              </a></Link>
                            </li>
                            <li>
                            <Link href="https://whatsapp.com" target="_blank" rel="noreferrer" ><a>
                                <i className="ri-whatsapp-line"></i>
                              </a></Link>
                            </li>
                            <li>
                            <Link href="https://youtube.com" target="_blank" rel="noreferrer" ><a>
                                <i className="ri-youtube-line"></i>
                              </a></Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mb-20">
                      <div className="more">
                        <div className="icon" onClick={toggleMore}>
                          <i className="ri-more-fill"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isMore ? 'visible' : null
                          } `}>
                          <ul className="space-y-10">
                            <li>
                              <Popup
                                className="custom"
                                ref={ref}
                                trigger={
                                  <Link
                                    href="#"><a className="content space-x-10 d-flex">
                                    <i className="ri-flag-line" />
                                    <span> Report </span>
                                    </a></Link>
                                }
                                position="bottom center">
                                <div>
                                  <div
                                    className="popup"
                                    id="popup_bid"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-hidden="true">
                                    <div>
                                      <div className="space-y-20">
                                        <h3>
                                          Thank you, we've received your report
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
