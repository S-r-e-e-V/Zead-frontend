import React from 'react';
import CardProfile from '../components/cards/card-profile';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Link from 'next/link';
import CollectionProfile from '../components/collection/collection-profile';

const Profile = () => {
  return (
    <div>
      {/* <HeroProfile /> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-7 order-md-0 order-1">
            {/* <SidebarProfile /> */}
          </div>
          <div className="col-lg-9 col-md-12 order-md-1 order-0">
            <div className="profile__content">
              <div className="d-flex justify-content-between">
                <Tabs className="space-x-10">
                  <div className="d-flex justify-content-between">
                    <TabList className="d-flex space-x-10 mb-30 nav-tabs">
                      <Tab className="nav-item">
                        <Link
                          data-toggle="tab"
                          href="#tabs-1"
                          role="tab"><a className="btn btn-white btn-sm">
                          Creations
                          </a></Link>
                      </Tab>
                      <Tab>
                        <Link
                          data-toggle="tab"
                          href="#tabs-2"
                          role="tab"><a className="btn btn-white btn-sm">
                          Collections
                          </a></Link>
                      </Tab>
                    </TabList>

                  </div>
                  <div className="tab-content">
                    <TabPanel className="active">
                      <CardProfile />
                    </TabPanel>
                    <TabPanel>
                      <CollectionProfile />
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
