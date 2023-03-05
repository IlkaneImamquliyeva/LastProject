import React from 'react'
import shopimg1 from '../../../../imgs/Shop-imgs/shopimg1.webp'
import shopimg2 from '../../../../imgs/Shop-imgs/shopimg2.webp'

import ShopSection1 from '../../ShopSection1';
import ShopSection2 from '../../ShopSection2'
import ProductList from './ProductList';



const CoatsJackets = () => {

  return (
    <>

      {/* header-start------------- */}
      <div className="headerSec1 ">
        <div className="img-left col-3">
          <img src={shopimg1} alt="" />
        </div>
        <div className="center-text col-6 ps-5">Coats & Jackets</div>
        <div className="img-right col-3">
          <img src={shopimg2} alt="" />
        </div>
      </div>
      <br /><br />
      {/* header-end------------- */}



      {/* card- start---------------- */}
      <ProductList />
      {/* card- end---------------- */}

      {/* --------------------------- */}
      <ShopSection1 />
      {/* ------------------------------- */}
      <ShopSection2 />
    </>
  )
}

export default CoatsJackets