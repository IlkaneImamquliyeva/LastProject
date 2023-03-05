import React from 'react'
import secimg1 from '../../imgs/section1-imgs/section1-img1.png';
import secimg2 from '../../imgs/section1-imgs/section1-img2.png';
import secimg3 from '../../imgs/section1-imgs/section1-img3.png';
import secimg4 from '../../imgs/section1-imgs/section1-img4.png';
import secimg5 from '../../imgs/section1-imgs/section1-img5.png';
import secimg6 from '../../imgs/section1-imgs/section1-img6.png';
import '../../Config/i18n'
import { useTranslation } from "react-i18next";


const Section1 = () => {
  const { t } = useTranslation();

    return (
        <>

        {/* path-bottom-start------------------ */}
<div className="divvv">
        <div className="elementor-shape elementor-shape-bottom" data-negative="false">
          <svg xmlns="http://www.w3.org/20000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
        <div className="section1">
         
         <div className="container ">
             {/* text--start--- */}
             <div className="text-section1 ">
                 <div className='Offers fs-1 fs-lg-5'>  {t("language.home.weoffers")}</div>
                 <div className='Care fs-1 fs-lg-5 '>{t("language.home.care")} </div>
             </div>
             {/* text--end--- */}
             {/* box--start--- */}
             <div className=" box-con mt-5 " >
                 <div className=" container ">
                     <div className=" row " >

                         <div className="col-lg-4 col-md-6 col-12 "  >
                             <div className="sec1">
                                 <div><img src={secimg1} alt="secimg1" /></div>
                                 <div className="number1">
                                     <div className='yuzelli'>150+</div>
                                     <div className='Pets'> {t("language.home.pet1")}</div>
                                 </div>
                             </div>
                         </div>

                         <div className="col-lg-4 col-md-6 col-12" >
                             <div className="sec1">
                                 <div><img src={secimg2} alt="secimg1" /></div>
                                 <div className="number1">
                                     <div className='yuzelli'>750+</div>
                                     <div className='Pets'> {t("language.home.pet2")}</div>
                                 </div>
                             </div>
                         </div>

                         <div className="col-lg-4 col-md-6 col-12">
                             <div className="sec1">
                                 <div><img src={secimg3} alt="secimg1" /></div>
                                 <div className="number1">
                                     <div className='yuzelli'>500+</div>
                                     <div className='Pets'>{t("language.home.pet3")}</div>
                                 </div>
                             </div>
                         </div>
                         {/* //////////////////////////////////////////////////////////// */}
                         <div className="col-lg-4 col-md-6  col-12">
                             <div className="sec1">
                                 <div><img src={secimg4} alt="secimg1" /></div>
                                 <div className="number1">
                                     <div className='yuzelli'>999+</div>
                                     <div className='Pets'>{t("language.home.pet4")}</div>
                                 </div>
                             </div>
                         </div>

                         <div className="col-lg-4 col-md-6 col-12">
                             <div className="sec1">
                                 <div><img src={secimg5} alt="secimg1" /></div>
                                 <div className="number1">
                                     <div className='yuzelli'>680+</div>
                                     <div className='Pets'>{t("language.home.pet5")}</div>
                                 </div>
                             </div>
                         </div>

                         <div className="col-lg-4 col-md-6 col-12">
                             <div className="sec1">
                                 <div><img src={secimg6} alt="secimg1" /></div>
                                 <div className="number1">
                                     <div className='yuzelli'>120+</div>
                                     <div className='Pets'>{t("language.home.pet6")}</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             {/* text--end--- */}

         </div>
     </div>
      </div>
      {/* path-bottom-end------------------ */}

          

        </>
    )

}

export default Section1