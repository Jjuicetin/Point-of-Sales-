import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import axios from 'axios'

const ServicePage = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    const result = await axios.get('products');
    setProducts(await result.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <div className='row'>
        <div className='col-lg-8'>
          {isLoading ? 'Loading' : <div className='row'>
              {products.map((product, key) =>
                <div key={key} className='col-lg-4 mb-4'>
                  <div className='pos-item px-3 text-center border'>
                      <p>{product.name}</p>
                      <img src={product.image} className="img-fluid" alt={product.name} />
                      <p>${product.price}</p>
                  </div>

                </div>
              )}
            </div>}
       
        </div>
        </div>
   </MainLayout>
  )
  
  
  
}
export default ServicePage;
