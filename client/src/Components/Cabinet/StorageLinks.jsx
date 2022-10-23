import React from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { CgSmartHomeCooker, CgSmartHomeRefrigerator } from 'react-icons/cg';
// import { GrFavorite } from 'react-icons/gr';

import './personalStorage.css';

export default function CabinetLinks() {
  return (
  // <div className="container-cabinet">
  //   <div className="box">
  //     <div className="imgBox">
  //       <img src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="" />
  //     </div>
  //     <div className="content">
  //       <h2>
  //         Products in storage
  //       </h2>
  //     </div>
  //   </div>
  //   <div className="box">
  //     <div className="imgBox">
  //       <img src="https://i.pinimg.com/736x/42/88/9e/42889ef01be96c5d0f2e143bd95eef84--free-recipes-simple-recipes.jpg" alt="" />
  //     </div>
  //     <div className="content">
  //       <h2>
  //         Favorite recipes
  //       </h2>
  //     </div>
  //   </div>
  //   <div className="box">
  //     <div className="imgBox">
  //       <img src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="" />
  //     </div>
  //     <div className="content">
  //       <h2>
  //         Already cooked
  //       </h2>
  //     </div>
  //   </div>
  //   <div className="box">
  //     <div className="imgBox">
  //       <img src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="" />
  //     </div>
  //     <div className="content">
  //       <h2>
  //         Shopping list
  //       </h2>
  //     </div>
  //   </div>
  // </div>

    <div className="container-cabinet">
      <div className="storage-link">
        <Link to="/storage/products">
          {/* <CgSmartHomeRefrigerator className="storage-icons" /> */}
          <img className="storage-img" src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="storage" />
          <p className="storage-text">Products in storage</p>
        </Link>
      </div>
      <div className="storage-link">
        {/* <GrFavorite className="storage-icons" /> */}
        <Link to="/storage/favorites">
          <img className="storage-img" src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="storage" />
          <p className="storage-text">Favorite recipes</p>
        </Link>
      </div>
      <div className="storage-link">
        {/* <CgSmartHomeCooker className="storage-icons" /> */}
        <Link to="/storage/cooked">
          <img className="storage-img" src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="storage" />
          <p className="storage-text">Already cooked</p>
        </Link>
      </div>
      <div className="storage-link">
        {/* <AiOutlineShoppingCart className="storage-icons" /> */}
        <Link to="/storage/list">
          <img className="storage-img" src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="storage" />
          <p className="storage-text">Shopping list</p>
        </Link>
      </div>
    </div>
  );
}
