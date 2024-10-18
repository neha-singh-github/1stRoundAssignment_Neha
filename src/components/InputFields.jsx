import React from 'react';

const InputFields = () => {
  return (
    <div className='expandDiv'>
      <div className='expandDivLeft'>
        <span className='expandDivSizeText' style={{ marginLeft: '16px' }}>
          Size
        </span>
        <div className='dropdownDiv'>
          <span className='size1'>#1</span>
          <select className='dropdown'>
            <option>S</option>
            <option>M</option>
          </select>
        </div>
        <div className='dropdownDiv'>
          <span className='size1'>#2</span>
          <select className='dropdown'>
            <option>S</option>
            <option>M</option>
          </select>
        </div>
      </div>
      <div className='expandDivRight'>
        <span className='expandDivSizeText'>Colour</span>
        <select className='dropdown'>
          <option>Black</option>
          <option>White</option>
        </select>
        <select className='dropdown'>
          <option>White</option>
          <option>Black</option>
        </select>
      </div>
    </div>
  );
};

export default InputFields;
