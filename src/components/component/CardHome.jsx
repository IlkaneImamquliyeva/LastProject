import React from 'react'


const CardHome = ({title,price,img}) => {
  return (

<div className="card col-lg-3 col-sm-6 col-12   " >
    <img src={img} alt="" />
    <div className="star-fill"></div>
    <h3 className="card-title pt-4 pb-2">{title}</h3>
    <h4 className="card-subtitle mb-2 pb-2">price: <del className='ms-2 me-2'>48$</del> {price}</h4>
  </div>
  )
}

export default CardHome