import React from 'react';

const Menu = () => {
  return (
    <section className='menu'>
      <div className='container-main'>
        <div className='d-flex justify-content-end'>
          <nav>
            <ul>
              <li className='sort-1'>
                <span></span>
                <span></span>
              </li>
              <li className='sort-2'>
                <span className='rowc'>
                  <span></span>
                  <span></span>
                </span>
                <span className='rowc'>
                  <span></span>
                  <span></span>
                </span>
              </li>
              <li className='sort-3'>
                <span className='rowc'>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className='rowc'>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className='rowc'>
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
        </div>
      </div>
    </section>
  )
};

export default Menu;