import React from 'react';

const ProductList = () => {
  return (
    <section className='menu'>
      <div className='menu__heading'>
        <h2 className='menu__title restaurant-title'>Restaurant name</h2>
        <div className='card-info'>
          <div className='rating'>4.7</div>
          <div className='price'>Від 100 грн</div>
          <div className='category'>Category name</div>
        </div>
      </div>

      <div className='cards menu__cards'>
        //
      </div>
    </section>
  )
}

export default ProductList;