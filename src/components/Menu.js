import React from 'react';

const Menu = () => {
  return (
    <section className='menu'>
      <nav>
        <ul>
          <li className='sort-1'>
            <span></span>
            <span></span>
          </li>
          <li className='sort-2'>
            <span className='row'>
              <span></span>
              <span></span>
            </span>
            <span className='row'>
              <span></span>
              <span></span>
            </span>
          </li>
          <li className='sort-3'>
            <span className='row'>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className='row'>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className='row'>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </li>
          <li className='filter'>
            FILTER
          </li>
          <li className='backet'>
            <span className='block'>
              <span className='frame'></span>
              <span className='items'>0</span>
            </span>
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default Menu;