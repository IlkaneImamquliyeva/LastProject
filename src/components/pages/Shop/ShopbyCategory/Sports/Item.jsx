import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWishlist } from 'react-use-wishlist';
import { useTranslation } from "react-i18next";




const Item = ({ ctitle, cprice,  cimg,  addproduct,allwishlist}) => {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();

  const notify = () => toast("cart added!");

  
  return (
    <>
      <div className='card  col-lg-3 col-md-4 col-6'>
        <img src={cimg} alt="error" width="100%" height="350px" />
        <div className='info'>
          <h5>{ctitle}</h5>
          <p>{cprice}$</p>
          
          <div className="addtocard">
    
            <button onClick={() => (notify(addItem(addproduct)))} className=" mt-3 "> {t("language.dashboard.Addtocart")}</button>
            <button  onClick={() => (notify(addWishlistItem(allwishlist)))} className='mt-3'>{t("language.dashboard.Wishlist")}</button>
           
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default Item