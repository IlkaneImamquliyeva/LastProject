import React from 'react'
import hero from '../../imgs/carousell/whiteimg.png'
import sumuk from '../../imgs/carousell/sumuk.png'
import '../../Config/i18n'
import { useTranslation } from "react-i18next";
  

const HomeSection = () => {
    const {t} = useTranslation();

    return (
        <>
    <div className="homesection">
<div className="box ">
<div className="text-home col-8">
<h1>{t("language.home.petshop")}</h1>
<h3>{t("language.home.make")}</h3>
</div>
<div className="sumukimg justify-content-center align-items-center d-flex mt-5 mt-lg-0 col-8">
    <img src={sumuk} alt="" />
    </div>

</div>

{/*  fiqur-------------- */}
<img   className='herro' src={hero} alt="" />


    </div>
        </>
    )
}

export default HomeSection