import React from 'react';
import img from '../../assets/img/pizza-plus/preview.jpg';

const RestaurantCard = () => {
  return (
    <div className='card card-restaurant'>
      <img src={img} alt='restaurant' />
      
      <div className='card-text'>
        <div className='card-heading'>
          <h3 className='card-title'>Margarita</h3>
          <span className='card-tag tag'>time of delivery</span>
        </div>

        <div className='card-info'>
          <div className='rating'>4.5</div>
          <div className='price'>Від 200 hrn</div>
          <div className='category'>Kitchen</div>
        </div>
      </div>
    </div>
  )
};

export default RestaurantCard;