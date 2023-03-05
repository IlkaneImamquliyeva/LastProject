// import React, { useContext } from 'react'
// import CardHome from '../../component/CardHome'
// import {  CardHomeContext } from '../../context/CardHomeContext'
import '../../Config/i18n'
// import { useTranslation } from "react-i18next";

const CardHomeList = () => {
  // const [cardhomedata] = useContext(CardHomeContext)
  // const { t } = useTranslation();
  
  return (
    <>
      {/* --card-text-start-- */}
      {/* <div className="card-text"> */}
        {/* <div className="container">
          <div className='col-12 fs-1 fw-bold mt-5 mb-5 '>{t("language.home.bestseller")} </div>
        </div> */}
      {/* </div> */}
      {/* --card-text-end-- */}
      {/* --card-start-- */}
      {/* <div className="cardhomee">
      <div className="container">
        <div className='row'>
          {cardhomedata.map((fd, i) => (
            <CardHome key={i} img={fd.img} title={fd.title} price={fd.price}  />
          ))}
        </div>
      </div>  
      </div> */}
      {/* --card-end-- */}
<br /><br /><br />
<br /><br /><br />

    </>
  )
}

export default CardHomeList


