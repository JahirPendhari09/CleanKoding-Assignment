import React, { useState } from 'react';
import style from './singleproduct.module.css';

const SingleProduct = ({ id, title, description, image,price,category }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={style.singleBox} style={{ height: showFullDescription ? 'auto' : '400px' }}>
      <img src={image} alt='Product-image' />
      <div>
        <h4>{title}</h4>
        <p><span>Price</span> :- {Math.floor(price)} USD</p>
        <p><span>Category :- {category}</span></p>
        <p><span>Description</span> :- {showFullDescription ? description : `${description.substring(0, 50)}...`}</p>
      </div>
      <button className={style.toggleButton} onClick={toggleDescription}>
        {showFullDescription ? 'Less' : 'More'}
      </button>
    </div>
  );
};

export default SingleProduct;
