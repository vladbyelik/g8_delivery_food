import React, { useState } from 'react';

const ModalBasket = ({ login, onClose }) => {

  const dataFromStorage = JSON.parse(localStorage.getItem(login));
  const [data, setData] = useState(dataFromStorage);

  const totalPrice = data?.reduce((acc, item) => acc + item.cost * item.count, 0);

  const handleCountProduct = (id, count, k) => {

    if(count === 1 && k === -1) {
      const filteredData = data.filter(product => product.id !== id);
      localStorage.setItem(login, JSON.stringify(filteredData));
    } else {
      const changedData = data.map(product => {
        if(product.id === id) {
          return {...product, count: product.count + k}
        } else return product;
      })
      localStorage.setItem(login, JSON.stringify(changedData));
    }
    setData(JSON.parse(localStorage.getItem(login)));
  }

  return (
    <>
      <div className='modal modal-cart' onClick={onClose}></div>
      <div className='modal-dialog'>
        <div className='modal-header'>
          <h3 className='modal-title'>Корзина</h3>
          <button className='close' onClick={onClose}>&times;</button>
        </div>

        <ul className='modal-body'>
          {data?.map(product => {
            const { id, title, cost, count } = product;
            return (
              <li key={id} className='food-row'>
                <span className='food-name'>{title}</span>
                <strong className='food-price'>{cost} грн</strong>
                <div className='food-counter'>
                  <button className='counter-button' onClick={() => handleCountProduct(id, count, -1)}>-</button>
                  <span className='counter'>{count}</span>
                  <button className='counter-button' onClick={() => handleCountProduct(id, count, 1)}>+</button>
                </div>
              </li>
            )
          })}
        </ul>

        <div className='modal-footer'>
          <span className='modal-pricetag'>{totalPrice} грн</span>
          <div className='footer-buttons'>
            <button className='button button-primary'>Оформити замовлення</button>
            <button className='button clear-cart'>Скасувати</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalBasket;