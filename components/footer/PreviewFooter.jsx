import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

const PreviewFooter = () => {
  return (
    <footer className="bg_white py-20">
      <div className="container px-xl-0">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-auto text-xl-left logo_holder">
            <Link href="/"><a>
              <Image
                className="header__logo"
                id="logo_js"
                 src="/assets/images/logos/Logo.svg"
                alt="logo"
              />
            </a></Link>
          </div>
          <div className="col-lg-auto semibold space-x-20 links bottom0menu">
            <Link href="mailto:creabik@gmail.com" className="link color_text"><a>
              Support
              </a></Link>
            <Link
              to="https://themeforest.net/user/creabik"
              className="link
              color_text"><a>
              Creabik Team
              </a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PreviewFooter;
