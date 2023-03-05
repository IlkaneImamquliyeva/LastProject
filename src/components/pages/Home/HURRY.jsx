import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../Config/i18n'
import { useTranslation } from "react-i18next";
const activeStyle = {
  color: "red"
}


const HURRY = () => {
  const { t } = useTranslation();

  return (
    <>
  
      {/* path-top-start------------------ */}
      <div className="hurry">
        <div className="elementor-shape elementor-shape-top" data-negative="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
          </svg>
          <div className="container">
            <div className="row">
              {/* text-box-start--- */}
              <div className="hurry-box col-lg-6 col-12">
                {/* text-1--start--- */}
                <div className=" dd d-flex justify-content-lg-start justify-content-center  ">
                  <h1>{t("language.home.Hurryup")}</h1>
                </div>
                {/* text-1--end--- */}
                {/* text-2--start--- */}
                <div className="ff d-flex justify-content-lg-start  justify-content-center  ">
                  <h2>{t("language.home.there")}</h2>
                </div>
                {/* text-2--end--- */}
              </div>
              {/* text-box-end--- */}
              {/* button-start--- */}
              <div className=" col-lg-6 col-12 button-hurry d-flex align-items-center justify-content-center ">
                <button className='mb-3'>  <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/shop">{t("language.home.shop2")}</NavLink></button>
              </div>
              {/* button-start--- */}
            </div>
          </div>
        </div>
      </div>
      {/* path-top-end------------------ */}

      {/* path-bottom-start------------------ */}
      <div className="divv">
        <div className="elementor-shape elementor-shape-bottom" data-negative="false">
          <svg xmlns="http://www.w3.org/20000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </div>
      {/* path-bottom-end------------------ */}

    </>
  )
}

export default HURRY