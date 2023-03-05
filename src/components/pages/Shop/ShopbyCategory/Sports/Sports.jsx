import React from 'react'
import ShopSection2 from '../../ShopSection2'
import shopimg1 from '../../../../imgs/Shop-imgs/shopimg1.webp'
import shopimg2 from '../../../../imgs/Shop-imgs/shopimg2.webp'
import ShopSection1 from '../../ShopSection1'
// import ProductList from './ProductList'
import product from '../../../../data/burger'
import Item from './Item'

const Sports = () => {
  return (
    <>
      <div className="headerSec1">
        <div className="img-left col-3">
          <img src={shopimg1} alt="" />
        </div>
        <div className="center-text col-6">Sports </div>
        <div className="img-right col-3">
          <img src={shopimg2} alt="" />
        </div>
      </div>

      {/* ///////////////// */}

      <div className='container mt-5'>
        <div className="row">
          {product.slice(33,37).map((fd, i) => (
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

      {/* --------------------------- */}
      <ShopSection1 />
      {/* ------------------------------- */}
      <ShopSection2 />
    </>
  )
}

export default Sports