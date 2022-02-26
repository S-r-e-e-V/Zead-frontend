import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const CollectionItems = [
  {
    img1: '1',
    img2: '2',
    img3: '3',
    img4: '4',
    title: 'Creative Art collection',
    likes: '2.1',
    stock: '5',
    avatar_img: '1',
    avatar_name: 'william_jamy',
  },
  {
    img1: '5',
    img2: '6',
    img3: '7',
    img4: '8',
    title: 'Colorful Abstract collection',
    likes: '3.5',
    stock: '7',
    avatar_img: '2',
    avatar_name: 'alexis_fenn',
  },
  {
    img1: '2',
    img2: '6',
    img3: '3',
    img4: '7',
    title: 'Photography Art collection',
    likes: '7.2',
    stock: '2',
    avatar_img: '3',
    avatar_name: 'Joshua_Bren',
  },
  {
    img1: '1',
    img2: '2',
    img3: '3',
    img4: '4',
    title: 'Fantasy Art collection',
    likes: '2.1',
    stock: '5',
    avatar_img: '4',
    avatar_name: 'william_jamy',
  },
  {
    img1: '5',
    img2: '6',
    img3: '7',
    img4: '8',
    title: 'Pop Art collection',
    likes: '3.5',
    stock: '7',
    avatar_img: '5',
    avatar_name: 'alexis_fenn',
  },
  {
    img1: '2',
    img2: '6',
    img3: '3',
    img4: '7',
    title: 'Contemporary Art collection',
    likes: '7.2',
    stock: '2',
    avatar_img: '6',
    avatar_name: 'Joshua_Bren',
  },
];
function CollectionProfile() {
  return (
    <div>
      <div className="row justify-content-center">
        {CollectionItems.map((val, i) => (
          <div className="col-lg-4 col-md-6 col-sm-8 mb-20" key={i}>
            <div className="collections space-y-10 mb-30">
              <Link href="collections"><a>
                <div className="collections_item position-relative">
                  <Link href="item-details"><a className="images-box space-y-10">
                    <div className="row mb-4">
                      <div className='col-4'>
                      <Image src={`/assets/images/items/item_${val.img1}.png`} width="100%" height="100%" layout="responsive" objectFit='cover' alt="prv" />
                      </div>
                      <div className='col-4'>
                      <Image src={`/assets/images/items/item_${val.img2}.png`} width="100%" height="100%" layout="responsive" objectFit='cover' alt="prv" />
                      </div>
                      <div className='col-4'>
                      <Image src={`/assets/images/items/item_${val.img3}.png`} width="100%" height="100%" layout="responsive" objectFit='cover' alt="prv" />
                      </div>
                    </div>
                    <Image src={`/assets/images/items/item_${val.img4}.png`} width={'100%'} height={'100%'} layout="responsive" objectFit='cover' alt="prv" />
                  </a></Link>
                </div>
              </a></Link>
              <div className="collections_footer justify-content-between">
                <h5 className="collection_title">
                  <Link href="profile"><a>{val.title}</a></Link>
                </h5>
                <Link href="#"><a className="likes space-x-3">
                  <i className="ri-heart-3-fill" />
                  <span className="txt_md">{val.likes}k</span>
                </a></Link>
              </div>
              <div className="creators space-x-10">
                <span className="color_text txt_md">
                  {val.stock} items · Created by
                </span>
                <div className="avatars space-x-5 position-relative">
                  <Link href="profile"><a>
                    <Image
                      src={`/assets/images/avatars/avatar_${val.avatar_img}.png`}
                      alt="Avatar"
                      layout="fill"
                      className="avatar avatar-sm"
                    />
                  </a></Link>
                </div>
                <Link href="profile"><a>
                  <p className="avatars_name txt_sm"> @{val.avatar_name}... </p>
                </a></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionProfile;
