import React from 'react';

import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Spinner from '../Spinner/Spinner';
import usePageData from '../../custom-hooks/usePageData';

const Restaurants = () => {
  const restaurantsList = usePageData('partners');

  return (
    <div className='restaurants__cards cards'>
      {restaurantsList 
        ? restaurantsList.map(restaurant => <RestaurantCard key={restaurant.image} {...restaurant} />)
        : <Spinner />
      }
    </div>
  )
}

export default Restaurants;