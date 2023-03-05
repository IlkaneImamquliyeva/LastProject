import React from 'react'
import ShopSection2 from '../../ShopSection2'
import shopimg1 from '../../../../imgs/Shop-imgs/shopimg1.webp'
import shopimg2 from '../../../../imgs/Shop-imgs/shopimg2.webp'
import ShopSection1 from '../../ShopSection1'
import product from '../../../../data/burger'
// import Item2 from './Item2'
import Item from '../Sports/Item'


const Sweaters = () => {
  return (
    <>
      <div className="headerSec1">
        <div className="img-left col-3">
          <img src={shopimg1} alt="" />
        </div>
        <div className="center-text col-6">Sweaters</div>
        <div className="img-right col-3">
          <img src={shopimg2} alt="" />
        </div>
      </div>

      {/* card-start------------------ */}

      <div className='container mt-5'>
        <div className="row">
          {product.slice(8,13).map((fd, i) => (
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

      {/* card-end------------------ */}

      {/* --------------------------- */}
      <ShopSection1 />
      {/* ------------------------------- */}
      <ShopSection2 />
    </>

  )
}

export default Sweaters

