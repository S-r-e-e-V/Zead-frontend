import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './Menu/MobileMenu';
import MegaMenu from './Menu/MegaMenu';
const ExploreMenu = [
  {
    icon: 'home-smile-2',
    title: ' All NFTs',
    link: '/explore',
  },
  {
    icon: 'home-2',
    title: ' Art',
    link: '/',
  },
  {
    icon: 'home-5',
    title: ' Collectables',
    link: '/',
  },
  {
    icon: 'home-5',
    title: ' Domain Names',
    link: '/',
  },
  {
    icon: 'home-5',
    title: 'Music',
    link: '/',
  },
  {
    icon: 'home-5',
    title: ' Photography',
    link: '/',
  },
  {
    icon: 'home-5',
    title: ' Sports',
    link: '/',
  },
  {
    icon: 'home-5',
    title: ' Trending Cards',
    link: '/',
  },
  {
    icon: 'home-5',
    title: ' Utility',
    link: '/',
  },
  {
    icon: 'home-5',
    title: ' Virtual Worlds',
    link: '/',
  }
];
const StatsMenu = [
  {
    title: 'Rankings',
    link: '/',
  },
  {
    title: 'Activity',
    link: '/',
  }
];
const ResourceMenu = [
  {
    title: 'Help Center',
    link: '/',
  },
  {
    title: 'Platform Status',
    link: '/',
  },
  {
    title: 'Partners',
    link: '/',
  },
  {
    title: 'Gas Free Marketplace',
    link: '/',
  },
  {
    title: 'Taxes',
    link: '/',
  },
  {
    title: 'Blog',
    link: '/',
  },
  {
    title: 'Docs',
    link: '/',
  },
  {
    title: 'Contact Us',
    link: '/',
  }
];
const CreateMenu = [
  {
    title: 'Create',
    link: '/upload',
  }
];
const ProfileMenu = [
  {
    title: 'Profile',
    link: '/',
  },
  {
    title: 'Favorites',
    link: '/',
  },
  {
    title: 'Watchlists',
    link: '/',
  },
  {
    title: 'My Collections',
    link: '/',
  },
  {
    title: 'Settings',
    link: '/',
  },
  {
    title: 'Night Mode',
    link: '/',
  },
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>

      <header className="header__1">
        <div className="container">
          <div className="wrapper js-header-wrapper row align-items-center">
            <div className="header__logo col-xl-2 col-xxl-1">
              <Link href="/"><a>
                  <Image src='/assets/images/zead-logo.svg' width="100%" height="100%" alt='' />
                  </a></Link>
            </div>
            {/* ================= */}
            <div className='col-xl-6 col-xxl-6 px-5'>
            <div className="header__search">
              <input type="text" placeholder="Search" />
              <Link href="no-results" className="header__result"><a>
                <i className="ri-search-line" />
                </a></Link>
            </div>
            </div>
            {/* ==================  */}
            <div className="header__menu col-xxl-5">
              <ul className="d-flex justify-content-between align-items-center">
                <li className="has_popup">
                  <Link className="color_black is_new" href="/"><a>
                    Explore
                  </a></Link>
                  <ul className="menu__popup space-y-20">
                    {ExploreMenu.map((val, i) => (
                      <li key={i}>
                        <Link href={val.link}><a>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                          </a></Link>
                      </li>
                    ))}
                  </ul>
                  {/* <ul className="menu__popup2 space-y-20">
                    <MegaMenu />
                  </ul> */}
                </li>
                <li className="has_popup">
                  <Link className="color_black is_new" href="/"><a>
                    Stats
                  </a></Link>
                  <ul className="menu__popup space-y-20">
                    {StatsMenu.map((val, i) => (
                      <li key={i}>
                        <Link href={val.link}><a>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                          </a></Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="has_popup">
                  <Link className="color_black is_new" href="/"><a>
                    Resource
                  </a></Link>
                  <ul className="menu__popup space-y-20">
                    {ResourceMenu.map((val, i) => (
                      <li key={i}>
                        <Link href={val.link}><a>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                          </a></Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {CreateMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" href={val.link}><a>
                      {val.title}
                      </a></Link>
                  </li>
                ))}
                <li className="has_popup">
                  <Link className="color_black is_new" href="/"><a>
                    Profile
                  </a></Link>
                  <ul className="menu__popup space-y-20">
                    {ProfileMenu.map((val, i) => (
                      <li key={i}>
                        <Link href={val.link}><a>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                          </a></Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className='header__btns'>
                <Link className="btn btn-grad btn-sm" href="/connect-wallet"><a className='bg-primary rounded-3 px-3 py-2'>
                <i className="ri-wallet-3-line" />
                Connect wallet
                </a></Link>
                </li>
              </ul>
            </div>
            
            <div className="header__burger js-header-burger" onClick={toggleClass}/>
            <div className={` header__mobile js-header-mobile  ${isActive ? 'visible': null} `}>
            <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
