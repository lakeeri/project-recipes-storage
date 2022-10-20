import React from 'react';
import { Link } from 'react-router-dom';

export default function CabinetLinks() {
  return (
    <div className="container-cabinet">
      <div>
        <Link to="/storage/products">Products in storage</Link>
      </div>
      <div>
        <Link to="/storage/favorites">Favorite recipes</Link>
      </div>
      <div>
        <Link to="/storage/cooked"> Already cooked</Link>
      </div>
      <div>
        <Link to="/storage/list">Shopping list</Link>
      </div>
    </div>
  );
}
