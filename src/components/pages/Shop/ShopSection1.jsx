import React from 'react'
import { useTranslation } from "react-i18next";




const ShopSection1 = () => {
    const { t } = useTranslation();
    return (
        <>
     
                {/* text start-------- */}
                <div className="shoptext mt-5">
                <div className="container">
                    <div className="col-12 shoptext1">
                   {t("language.shopp.Category")}
                    </div>
                </div>
            </div>
        {/* text end-------- */}

        </>
    )
}

export default ShopSection1