import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from '../../imgs/Shop-imgs/categoryimgs/categoryimg1.webp'
import img2 from '../../imgs/Shop-imgs/categoryimgs/categoryimg2.avif';
import img3 from '../../imgs/Shop-imgs/categoryimgs/categoryimg4.jpg';
import img4 from '../../imgs/Shop-imgs/categoryimgs/categoryimg3.jpg';
import img5 from '../../imgs/Shop-imgs/categoryimgs/categoryimg9.jpg';
import img6 from '../../imgs/Shop-imgs/categoryimgs/categoryimg6.jpg';
import img7 from '../../imgs/Shop-imgs/categoryimgs/categoryimg7.jpg';
import img8 from '../../imgs/Shop-imgs/categoryimgs/categoryimg8.webp';
import img9 from '../../imgs/Shop-imgs/categoryimgs/categoryimg5.webp';
import img10 from '../../imgs/Shop-imgs/categoryimgs/categoryimg10.jpg';
import { useTranslation } from "react-i18next";

const activeStyle = {
    color: "red"
}


const ShopSection2 = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="shopsection2">
                <div className="container">
                    <div className="row ">
                        <div  className="col-lg-2 col-md-3 col-6 cardtrend1 ">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link  toggle" to="/CoatsJackets"> <img src={img1}  alt="trendcard1img" /></NavLink>
                            <h1 className='fs-4 ps-5'>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/CoatsJackets">   {t("language.shopp.CoatsJackets")}</NavLink>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Sweaters"><img src={img2}  alt="trendcard1img" /></NavLink>
                            <h1 className='fs-4'>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Sweaters">   {t("language.shopp.Sweaters")}</NavLink>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Pajamas">  <img src={img3} className="secshopimg3 " alt="trendcard1img" /></NavLink>
                            <h1 className='fs-4  '>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Pajamas"> {t("language.shopp.Pajamas")}</NavLink>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 cardtrend3">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/BootsSocks"> <img src={img4} alt="trendcard4img" /></NavLink>
                            <h1 className='fs-4 shoph1text3'>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/BootsSocks"> {t("language.shopp.BootsSocks")}</NavLink>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Accessories"><img src={img5} alt="trendcard4img" /></NavLink>
                            <h1 className='fs-4 '>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Accessories"> {t("language.shopp.Accessories")}</NavLink>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Sports ">  <img src={img10} alt="trendcard4img" /> </NavLink>
                            <h1 className='fs-4 '>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Sports ">  {t("language.shopp.Sports")} </NavLink>
                            </h1>
                        </div>
                      <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/OutdoorGear ">   <img src={img9} alt="trendcard4img" /> </NavLink>
                            <h1 className='fs-4 '>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/OutdoorGear "> {t("language.shopp.OutdoorGear")}</NavLink>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Hoodies ">  <img src={img8} alt="trendcard4img" /> </NavLink>
                            <h1 className='fs-4 '>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Hoodies ">  {t("language.shopp.Hoodies")} </NavLink>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}  className="nav-link toggle" to="/Shirts ">  <img src={img6} alt="trendcard4img" /> </NavLink>
                            <h1 className='fs-4 '>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}  className="nav-link toggle" to="/Shirts ">  {t("language.shopp.Shirts")} </NavLink>
                            </h1>
                        </div>  
                         <div className="col-lg-2 col-md-3 col-6 cardtrend1">
                            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Dress "> <img src={img7} alt="trendcard4img" /> </NavLink>
                            <h1 className='fs-4 '>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/Dress ">  {t("language.shopp.Dress")}</NavLink>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSection2