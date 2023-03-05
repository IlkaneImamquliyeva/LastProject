import React from 'react'
import shopimg1 from '../../imgs/Shop-imgs/shopimg1.webp'
import shopimg2 from '../../imgs/Shop-imgs/shopimg2.webp'
import { useTranslation } from "react-i18next";

const ShopHeader = () => {
  const { t } = useTranslation();

    return (
        <>
            <div className="headerSec1">
                    <div className="img-left col-3">
                        <img src={shopimg1} alt="" />
                    </div>
                    <div className="center-text col-6 ps-4"> {t("language.shopp.Category")}</div>
                    <div className="img-right col-3">
                        <img src={shopimg2} alt="" />
                    </div>
                </div>
        </>
    )
}

export default ShopHeader