import React from 'react'
import "./Products.scss"
import Product from './Product/Product'
//importing here product dont feel discomfort
function Products({innerPage}) {
  //This prop used in category section only
  return (
    <div>
      <div className="products-container">
        {!innerPage &&<div className='sec-heading'>Section Heading</div>} {/*//this could be change dynamically */}
        <div className='products'>

          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default Products
