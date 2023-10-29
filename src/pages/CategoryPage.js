import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <Menu />
      <section className="category-page">
        <div className="container-main">
          <div className="products">
            {products.map(product => (
              <div className='product' key={product.id}>
                <img src={process.env.PUBLIC_URL + '/img/Product.png'} alt='product' />
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