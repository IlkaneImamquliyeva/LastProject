import React, { useEffect, useState } from 'react'

import '../../Config/i18n'
import { useTranslation } from "react-i18next";

const Header = () => {

  // ------mode----
  const [theme, setTheme] = useState(false);
  const Click = () => {
    setTheme(!theme);
  }

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");


    } else {
      document.body.classList.remove("dark");
    }
  })


  // -lang------
  const { t,i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
    <div className="hedd">
      <div className="container">
        <div className="header  d-lg-flex align-items-center  justify-content-center ">
          {/* ---text-start---*/}
          <div className=" col-lg-9 text d-flex align-items-center  justify-content-center  justify-content-lg-start">
            <p className='Welcome mt-2'>{t("language.home.welcome")}</p>
          </div>
          {/* ---text-end---*/}
          {/* ---button-start---*/}
          <div className="col-lg-3 lang-box  d-flex align-items-center justify-content-center justify-content-lg-end ">
            <div className=" header-icon-box  d-flex justify-content-evenly">
              <button className='en lang' onClick={() => { handleClick("en") }}>En</button>
              <button className="az lang" onClick={() => { handleClick("ru") }}>Ru</button>
              {/* <button className="mode"><i className="fa-solid fa-moon" /> */}
              <button className='mode ' onClick={Click}>{theme ? "Light" : "Dark"}</button>
              {/* </button> */}
            </div>
          </div>
          {/* ---button-end---*/}
        </div>
      </div>
      </div>
           
    </>
  )
}

export default Header