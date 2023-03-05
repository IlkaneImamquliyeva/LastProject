import React from 'react'
import Item from '../Sports/Item'
import product from '../../../../data/burger';


const ProductList = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className="row">
          {product.slice(0,8).map((fd, i) => (
            <Item
              key={i}
              ctitle={fd.title}
              cprice={fd.price}
              cimg={fd.img}
              addproduct={fd}
              allwishlist={fd}
              id={fd.id}
            />
          ))}
        </div>
      </div>

    </>
  )
}

export default ProductList

