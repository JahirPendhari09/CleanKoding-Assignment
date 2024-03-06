import React, { useState } from 'react';
import style from './singleproduct.module.css';

const SingleProduct = ({ id, title, description, image }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={style.singleBox} style={{ height: showFullDescription ? 'auto' : '350px' }}>
      <img src={image} alt='Product-image' />
      <h4>{title}</h4>
      <p>
        Description :- {showFullDescription ? description : `${description.substring(0, 50)}...`}
      </p>
      <button className={style.toggleButton} onClick={toggleDescription}>
        {showFullDescription ? 'Less' : 'More'}
      </button>
    </div> 
  );
};

export default SingleProduct;
