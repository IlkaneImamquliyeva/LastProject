import React from 'react'
import compeimg from '../../imgs/Competitions-imgs/dogss.jpg'
import '../../Config/i18n'
import { useTranslation } from "react-i18next";

const Competitions = () => {
  const { t } = useTranslation();

    return (
        <>
            <div className="Competitions mb-5 ">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-6 d-flex mt-lg-0 mt-md-5 mt-sm-0  justify-content-center flex-column"  >
                            {/* text-start------- */}
                            <h1 className='d-flex flex-column mt-lg-0 mt-md-5 mt-sm-0 '>
                                <span className='span1'>{t("language.home.Competitions")}  </span>
                                <span className='span2'>{t("language.home.Awards")} </span>
                            </h1>
                            <p className='mt-4' style={{ "color": "#9E9EB8" }}>{t("language.home.Agility")} </p>
                            {/* text-end------- */}
                        </div>
                        {/* img- start------- */}
                        <div className="col-lg-6 col-12 mt-5 ">
                            <img className='compe-img' src={compeimg} alt="compeimg" />
                        </div>
                        {/* img- end------- */}
                    </div>
                </div>
            </div>
            <br />  <br />  <br />
        </>
    )
}

export default Competitions