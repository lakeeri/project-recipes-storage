import React from 'react';
import './carousel.scss';

export default function MainPage() {
  return (

    <div className="wrapper">
      <nav className="lil-nav">
        <a href="#image-1">
          <img className="lil-nav__img" src="https://img3.akspic.ru/crops/6/9/9/5/6/165996/165996-klubnika-blin-klubnichnyj_pirog-bliny-palatschinke-1920x1080.jpg" alt="Yosemite" />
        </a>
        <a href="#image-2">
          <img className="lil-nav__img" src="https://img2.akspic.ru/previews/1/4/0/5/15041/15041-eda-pishha-klubnika-recept-superfood-x750.jpg" alt="Houses" />
        </a>
        <a href="#image-3">
          <img className="lil-nav__img" src="https://avatars.mds.yandex.net/i?id=24ab1373e53eeb2c519b78c568982829-5232997-images-thumbs&n=13" alt="Galaxies" />
        </a>
        <a href="#image-4">
          <img className="lil-nav__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/matthew-smith-9CV6WrxxdrM-unsplash.jpg" alt="Motel" />
        </a>
        <a href="#image-5">
          <img className="lil-nav__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg" alt="Minimalist nightmare" />
        </a>
        <a href="#image-6">
          <img className="lil-nav__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/jakob-owens-EkxOtUljwhs-unsplash.jpg" alt="Hoops" />
        </a>
        <a href="#image-7">
          <img className="lil-nav__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/tim-bogdanov-4uojMEdcwI8-unsplash.jpg" alt="Gentleman" />
        </a>
        <a href="#image-8">
          <img className="lil-nav__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/weston-mackinnon-caUtk0DTiR0-unsplash.jpg" alt="Stuff" />
        </a>
      </nav>

      <div className="gallery">
        <img className="gallery__img" id="image-1" src="https://img3.akspic.ru/crops/6/9/9/5/6/165996/165996-klubnika-blin-klubnichnyj_pirog-bliny-palatschinke-1920x1080.jpg" alt="Yosemite" />
        <p>lalalal</p>
        <img className="gallery__img" id="image-2" src="https://img2.akspic.ru/previews/1/4/0/5/15041/15041-eda-pishha-klubnika-recept-superfood-x750.jpg" alt="Houses" />
        <img className="gallery__img" id="image-3" src="https://avatars.mds.yandex.net/i?id=24ab1373e53eeb2c519b78c568982829-5232997-images-thumbs&n=13" alt="Galaxies" />
        <img className="gallery__img" id="image-4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/matthew-smith-9CV6WrxxdrM-unsplash.jpg" alt="Motel" />
        <img className="gallery__img" id="image-5" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg" alt="Minimalist nightmare" />
        <img className="gallery__img" id="image-6" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/jakob-owens-EkxOtUljwhs-unsplash.jpg" alt="Hoops" />
        <img className="gallery__img" id="image-7" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/tim-bogdanov-4uojMEdcwI8-unsplash.jpg" alt="Gentleman" />
        <img className="gallery__img" id="image-8" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/weston-mackinnon-caUtk0DTiR0-unsplash.jpg" alt="Stuff" />
      </div>
    </div>
  );
}
