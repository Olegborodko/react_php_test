import React, { useState,  useEffect } from 'react';
import Menu from '../components/Menu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation, useParams } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  const [product, setProduct] = useState(location.state);
  const { url_key } = useParams();

  useEffect(() => {
    if (!product) {
      fetch(`${process.env.REACT_APP_API_SERVER}/product.php`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url_key,
          }),
        })
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [product, url_key]);

  return (
    <>
      <Menu />
      <section className="product-page">
        <div className="container-main">
          {product && (
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
          )}
        </div>
      </section>
    </>
  );
};

export default ProductPage;