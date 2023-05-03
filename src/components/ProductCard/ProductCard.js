import React from 'react';
import { useSelector } from 'react-redux';

const ProductCard = (props) => {

  const {
    id,
    name,
    image,
    price,
    description
  } = props;

  const src = require(`../../assets/${image}`);

  const login = useSelector(state => state.login);

  const handleAddToBasket = () => {

    const loginStorageData = localStorage.getItem(login);

    const data = [{
      id,
      title: name,
      cost: price,
      count: 1
    }];

    if(!!loginStorageData) {
      const allData = JSON.parse(loginStorageData);
      const isSameProduct = !!allData.find(item => item.id === id);

      if(isSameProduct) {
        allData.forEach(item => {
          if(item.id === id) {
            item.count = item.count + 1;
          }
        });

        localStorage.setItem(login, JSON.stringify(allData));
      } else {
        const newData = allData.concat(data);
        localStorage.setItem(login, JSON.stringify(newData));
      }

    } else {
      if(login) {
        localStorage.setItem(login, JSON.stringify(data));
      }
    }
  };
  
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
          <button onClick={handleAddToBasket} className='button button-primary button-add-cart'>
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