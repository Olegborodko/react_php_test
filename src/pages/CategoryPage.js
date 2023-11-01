import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_SERVER}/products.php`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const goToProduct = (product) => {
    const productUrl = `/product/${product.url_key}`;
    navigate(productUrl, { state: product });
  }

  return (
    <>
      <Menu />
      <section className="category-page">
        <div className="container-main">
          <div className="products">
            {products.map(product => (
              <div className='product' key={product.id} onClick={() => goToProduct(product)}>
                <img src={process.env.PUBLIC_URL + '/img/' + product.image_path} alt='product' />
                <div className='title'>
                  {product.name}
                </div>
                <b className='price'>
                  {product.price}
                </b>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
};

export default CategoryPage;