import React from 'react';
import Menu from '../components/Menu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <>
      <Menu />
      <section className="product-page">
        <div className="container-main">
          <Row xs={1} md={2}>
            <Col>
            <img src={process.env.PUBLIC_URL + '/img/' + product.image_path} alt='product' />
            </Col>
            <Col>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <b>{product.price}</b>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ProductPage;