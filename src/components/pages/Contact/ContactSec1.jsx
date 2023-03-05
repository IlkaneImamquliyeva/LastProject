import React from 'react'
import shopimg1 from '../../imgs/Shop-imgs/shopimg1.webp'
import shopimg2 from '../../imgs/Shop-imgs/shopimg2.webp'
import { useTranslation } from "react-i18next";


const ContactSec1 = () => {
  const { t } = useTranslation();
  return (
    <>

      {/* header-start------------- */}
      <div className="headerSec1 ">
        <div className="img-left col-3">
          <img src={shopimg1} alt="" />
        </div>
        <div className="center-text col-6">  {t("language.contact.ContactUs")}</div>
        <div className="img-right col-3">
          <img src={shopimg2} alt="" />
        </div>
      </div>
      <br /><br />
      {/* header-end------------- */}


      {/* ------------------ */}

      <div className="contact">
        <div className="container">
          <div className="contact-center ">

            <div className="con-text col-12">
              <h1> {t("language.contact.Getintouch")}</h1>
            </div>

            <div className="cont-center  ">
              <div className="con-left col-lg-6 col-ms-12   ">
                <input type="text" placeholder=  {t("language.contact.FullName")} />
                <input type="email" placeholder= {t("language.contact.YourEmail")} />
                <input type="text"  placeholder={t("language.contact.PhoneNumber")} className='mb-4' />
              </div>

              <div className="con-right col-lg-6 col-ms-12">
                <input type="message" />
              </div>

            </div>
              <div className="con-button"><button className='buttoncon' >  {t("language.contact.Send")}</button></div>
          </div>
        </div>
      </div>





      {/* --------------- */}


    </>
  )
}

export default ContactSec1