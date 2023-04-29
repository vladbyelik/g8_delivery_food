import React from 'react';

const ProductCard = (props) => {

  const {
    id,
    name,
    image,
    price,
    description
  } = props;

  const src = require(`../../assets/${image}`);
  
  return (
    <div className='card'>
      <img src={src} alt={src} className='card-image' />
      <div className='card-text'>

        <div className='card__heading'>
          <h3 className='card-title card-title-reg'>{name}</h3>
        </div>

        <div className='card-info'>
          <div className='ingredients'>{description}</div>
        </div>

        <div className='card-buttons'>
          <button className='button button-primary button-add-cart'>
            <span className='button-card-text'>В корзину</span>
            <span className='button-cart-svg'></span>
          </button>
          <strong className='card-price-bold card-price'>${price}</strong>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;