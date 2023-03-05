import React from 'react'
import '../../Config/i18n'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <>

            <div className="fiqur">
                <div className="footer d-flex align-items-center justify-content-center">
                    <div className="container ">
                        <div className="row">
                            {/* box-1---- */}
                            <div className="foot-one  col-lg-3 col-sm-6 col-12 ">
                                <ul>
                                    <img className='logo2' src="https://cdn.shopify.com/s/files/1/0613/0810/8999/files/logo_100x.png?v=1645525876" alt="" />
                                    <li><i className="fa-solid fa-location-dot pe-2"></i>{t("language.home.main")}</li>
                                    <li><i className="fa-solid fa-envelope-open-text pe-2"></i>{t("language.home.example")}</li>
                                    <li><i className="fa-solid fa-phone-volume pe-2"></i>(+02) 1800 5656 3010</li>
                                </ul>
                            </div>
                            {/* box-2---- */}
                            <div className="foot-two  col-lg-3 col-sm-6 col-12">
                                <ul>
                                    <h1>{t("language.home.Working")}</h1>
                                    <li>{t("language.home.support")}</li>
                                    <li>{t("language.home.Mon")}</li>
                                    <li>{t("language.home.Saturday")}</li>
                                    <li>{t("language.home.Sunday")}</li>
                                </ul>
                            </div>
                            {/* box-3---- */}
                            <div className="foot-theree  col-lg-3 col-sm-6 col-12">
                                <ul>
                                    <h1>{t("language.home.Links")}</h1>
                                    <li>{t("language.home.Boarding")}</li>
                                    <li>{t("language.home.Grooming")}</li>
                                    <li>{t("language.home.Dog")} </li>
                                    <li>{t("language.home.Pet7")}</li>
                                    <li>{t("language.home.Pet8")} </li>
                                </ul>
                            </div>
                            {/* box-4---- */}
                            <div className="foot-four  col-lg-3 col-sm-6 col-12">
                                <ul>
                                    <h1>{t("language.home.Newsletter")} </h1>
                                    <li> {t("language.home.Subscribe")}</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* path--------------- */}
                <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice">
                        <path className="elementor-shape-fill" d="M0 0v1.4c.6.7 1.1 1.4 1.4 2 2 3.8 2.2 6.6 1.8 10.8-.3 3.3-2.4 9.4 0 12.3 1.7 2 3.7 1.4 4.6-.9 1.4-3.8-.7-8.2-.6-12 .1-3.7 3.2-5.5 6.9-4.9 4 .6 4.8 4 4.9 7.4.1 1.8-1.1 7 0 8.5.6.8 1.6 1.2 2.4.5 1.4-1.1.1-5.4.1-6.9.1-3.7.3-8.6 4.1-10.5 5-2.5 6.2 1.6 5.4 5.6-.4 1.7-1 9.2 2.9 6.3 1.5-1.1.7-3.5.5-4.9-.4-2.4-.4-4.3 1-6.5.9-1.4 2.4-3.1 4.2-3 2.4.1 2.7 2.2 4 3.7 1.5 1.8 1.8 2.2 3 .1 1.1-1.9 1.2-2.8 3.6-3.3 1.3-.3 4.8-1.4 5.9-.5 1.5 1.1.6 2.8.4 4.3-.2 1.1-.6 4 1.8 3.4 1.7-.4-.3-4.1.6-5.6 1.3-2.2 5.8-1.4 7 .5 1.3 2.1.5 5.8.1 8.1s-1.2 5-.6 7.4c1.3 5.1 4.4.9 4.3-2.4-.1-4.4-2-8.8-.5-13 .9-2.4 4.6-6.6 7.7-4.5 2.7 1.8.5 7.8.2 10.3-.2 1.7-.8 4.6.2 6.2.9 1.4 2 1.5 2.6-.3.5-1.5-.9-4.5-1-6.1-.2-1.7-.4-3.7.2-5.4 1.8-5.6 3.5 2.4 6.3.6 1.4-.9 4.3-9.4 6.1-3.1.6 2.2-1.3 7.8.7 8.9 4.2 2.3 1.5-7.1 2.2-8 3.1-4 4.7 3.8 6.1 4.1 3.1.7 2.8-7.9 8.1-4.5 1.7 1.1 2.9 3.3 3.2 5.2.4 2.2-1 4.5-.6 6.6 1 4.3 4.4 1.5 4.4-1.7 0-2.7-3-8.3 1.4-9.1 4.4-.9 7.3 3.5 7.8 6.9.3 2-1.5 10.9 1.3 11.3 4.1.6-3.2-15.7 4.8-15.8 4.7-.1 2.8 4.1 3.9 6.6 1 2.4 2.1 1 2.3-.8.3-1.9-.9-3.2 1.3-4.3 5.9-2.9 5.9 5.4 5.5 8.5-.3 2-1.7 8.4 2 8.1 6.9-.5-2.8-16.9 4.8-18.7 4.7-1.2 6.1 3.6 6.3 7.1.1 1.7-1.2 8.1.6 9.1 3.5 2 1.9-7 2-8.4.2-4 1.2-9.6 6.4-9.8 4.7-.2 3.2 4.6 2.7 7.5-.4 2.2 1.3 8.6 3.8 4.4 1.1-1.9-.3-4.1-.3-6 0-1.7.4-3.2 1.3-4.6 1-1.6 2.9-3.5 5.1-2.9 2.5.6 2.3 4.1 4.1 4.9 1.9.8 1.6-.9 2.3-2.1 1.2-2.1 2.1-2.1 4.4-2.4 1.4-.2 3.6-1.5 4.9-.5 2.3 1.7-.7 4.4.1 6.5.6 1.5 2.1 1.7 2.8.3.7-1.4-1.1-3.4-.3-4.8 1.4-2.5 6.2-1.2 7.2 1 2.3 4.8-3.3 12-.2 16.3 3 4.1 3.9-2.8 3.8-4.8-.4-4.3-2.1-8.9 0-13.1 1.3-2.5 5.9-5.7 7.9-2.4 2 3.2-1.3 9.8-.8 13.4.5 4.4 3.5 3.3 2.7-.8-.4-1.9-2.4-10 .6-11.1 3.7-1.4 2.8 7.2 6.5.4 2.2-4.1 4.9-3.1 5.2 1.2.1 1.5-.6 3.1-.4 4.6.2 1.9 1.8 3.7 3.3 1.3 1-1.6-2.6-10.4 2.9-7.3 2.6 1.5 1.6 6.5 4.8 2.7 1.3-1.5 1.7-3.6 4-3.7 2.2-.1 4 2.3 4.8 4.1 1.3 2.9-1.5 8.4.9 10.3 4.2 3.3 3-5.5 2.7-6.9-.6-3.9 1-7.2 5.5-5 4.1 2.1 4.3 7.7 4.1 11.6 0 .8-.6 9.5 2.5 5.2 1.2-1.7-.1-7.7.1-9.6.3-2.9 1.2-5.5 4.3-6.2 4.5-1 7.7 1.5 7.4 5.8-.2 3.5-1.8 7.7-.5 11.1 1 2.7 3.6 2.8 5 .2 1.6-3.1 0-8.3-.4-11.6-.4-4.2-.2-7 1.8-10.8 0 0-.1.1-.1.2-.2.4-.3.7-.4.8v.1c-.1.2-.1.2 0 0v-.1l.4-.8c0-.1.1-.1.1-.2.2-.4.5-.8.8-1.2V0H0zM282.7 3.4z"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Footer