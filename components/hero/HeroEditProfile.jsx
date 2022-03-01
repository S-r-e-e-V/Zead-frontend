import React from "react";
import Link from "next/link";

const HeroEditProfile = () => {
  return (
    <div className="mb-50">
      <div className="hero__profile">
        <div className="tabs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb default mb-0">
              <li className="breadcrumb-item"></li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit profile
              </li>
            </ol>
          </nav>
        </div>
        <div className="cover">
          <img src="img/bg/cover.jpg" alt="cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroEditProfile;
