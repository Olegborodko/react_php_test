import React from 'react';
import Menu from '../components/Menu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CategoryPage = () => {
  return (
    <>
      <Menu />
      <section className="category-page">
        <div className="container-main">
          <Row>
            <Col>
              <img src={process.env.PUBLIC_URL + '/img/Product.png'} alt='product' />
              <div className='title'>
                SILVER-TONED PLIMSOLLS
              </div>
              <b className='price'>
                $1999.00
              </b>
            </Col>
            <Col>
              <img src={process.env.PUBLIC_URL + '/img/Product.png'} alt='product' />
              <div className='title'>
                SILVER-TONED PLIMSOLLS
              </div>
              <b className='price'>
                $1999.00
              </b>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </section>
    </>
  )
};

export default CategoryPage;