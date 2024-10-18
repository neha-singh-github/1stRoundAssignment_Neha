import React, { useState } from 'react';
import InputFields from './InputFields';

const WebPage = () => {
  const [selected, setSelected] = useState(1);
  const [totalPrice, setTotalPrice] = useState('$10.00 USD');

  const handleSelect = (index, price) => {
    setSelected(index);
    setTotalPrice(price);
  };

  return (
    <div className='ParentDiv'>
      <div className='title'>YAY! It's BOGO</div>

      {/* 1st Unit Box */}
      <div
        className={`radioBox ${selected === 1 && 'selectedRadioBox'}`}
        onClick={() => handleSelect(1, '$10.00 USD')}
      >
        <div style={{ display: 'flex' }}>
          <input
            type='radio'
            name='units'
            checked={selected === 1}
            onChange={() => handleSelect(1, '$10.00 USD')}
          />
          <label>
            <div className='unitsDiv'>
              <div className='unitsDivContainer'>
                <span className='units'>1 Unit</span>
                <span className='discount'>10% Off</span>
              </div>
              <div className='content'>Standard Price</div>
            </div>
            <div className='unitsDiv'>
              <span className='price'>$10.00 USD</span>
              <span className='subContent'>$24.00 USD</span>
            </div>
          </label>
        </div>
        {selected === 1 && <InputFields />}
      </div>

      {/* 2nd Unit Box */}
      <div
        className={`radioBox ${selected === 2 && 'selectedRadioBox'}`}
        onClick={() => handleSelect(2, '$18.00 USD')}
      >
        <div style={{ display: 'flex' }}>
          <input
            type='radio'
            name='units'
            checked={selected === 2}
            onChange={() => handleSelect(2, '$18.00 USD')}
          />
          <label>
            <div className='unitsDivContainer'>
              <span className='units'>2 Units</span>
              <span className='discount'>20% Off</span>
            </div>
            <div className='unitsDiv'>
              <span className='price'>$18.00 USD</span>
              <span className='subContent'>$24.00 USD</span>
            </div>
            <span className='mostPopular'>MOST POPULAR</span>
          </label>
        </div>
        {selected === 2 && <InputFields />}
      </div>

      {/* 3rd Unit Box*/}
      <div
        className={`radioBox ${selected === 3 && 'selectedRadioBox'}`}
        onClick={() => handleSelect(3, '$24.00 USD')}
      >
        <div style={{ display: 'flex' }}>
          <input
            type='radio'
            name='units'
            checked={selected === 3}
            onChange={() => handleSelect(3, '$24.00 USD')}
          />
          <label>
            <div className='unitsDivContainer'>
              <span className='units'>3 Units</span>
              <span className='discount'>30% Off</span>
            </div>
            <div className='unitsDiv'>
              <span className='price'>$24.00 USD</span>
              <span className='subContent'>$24.00 USD</span>
            </div>
          </label>
        </div>
        {selected === 3 && <InputFields />}
      </div>

      {/* Total Price */}
      <div className='priceAndFreeDeliveryDiv'>
        <div className='freeDelivery'>Free Delivery</div>
        <div className='totalPrice'>Total: {totalPrice}</div>
      </div>

      {/* Add to Cart Button*/}
      <button className='addToCartBtn'>
        <span className='plusIcon'>+</span> Add to Cart
      </button>

      <i>
        <span className='poweredBy'>@ Powered by Pumper</span>
      </i>
    </div>
  );
};

export default WebPage;
