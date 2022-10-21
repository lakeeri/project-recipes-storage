import React from 'react';

export default function LeftSide({ item }) {
  return (
    <a href={`#image-${item.id}`}>
      <img className="lil-nav__img" src={item.image} alt={item.name} />
    </a>
  );
}
