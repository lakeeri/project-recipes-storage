import React from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { CgSmartHomeCooker, CgSmartHomeRefrigerator } from 'react-icons/cg';
// import { GrFavorite } from 'react-icons/gr';

import './personalStorage.css';

export default function CabinetLinks() {
  return (
    <div className="bg-img">
      <div className="container-cabinet">
        <div className="box">
          <Link to="/storage/products">
            <div className="imgBox">
              <img src="https://cdn.vox-cdn.com/thumbor/OnL0CvrcN3OiDP9Ezk9hLZEg1Yk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19523323/batwing.jpg" alt="" />
            </div>
            <div className="content">
              <h2>
                Products in storage
              </h2>
            </div>
          </Link>

        </div>
        <div className="box">
          <Link to="/storage/favorites">
            <div className="imgBox">
              <img src="https://i.pinimg.com/736x/42/88/9e/42889ef01be96c5d0f2e143bd95eef84--free-recipes-simple-recipes.jpg" alt="" />
            </div>
            <div className="content">
              <h2>
                Favorite recipes
              </h2>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link to="/storage/cooked">
            <div className="imgBox">
              <img src="https://lh6.googleusercontent.com/h2UJEIE23ddeQfydPph_gwoU9xvfEbQHlhUpQhdGbCrTxeTiYpRFBdZMxJNjHfZjp7j2nRvgZLihuZrWfg3hVEM0DgPq5vMg3-q7bKP9YyhASik6zlwi6Llv21satj2NyGcCrNbO" alt="" />
            </div>
            <div className="content">
              <h2>
                Already cooked
              </h2>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link to="/storage/list">
            <div className="imgBox">
              <img src="https://tomato.ua/blog/wp-content/uploads/2019/04/DSC_9816-1-1536x1024.jpg" alt="" />
            </div>
            <div className="content">
              <h2>
                Shopping list
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>

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

  );
}
