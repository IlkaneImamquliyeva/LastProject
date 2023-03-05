import React from 'react'
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopSection1 from '../Shop/ShopSection1';
import ShopSection2 from '../Shop/ShopSection2';

import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();
  const {
    isEmpty,
    items,
    removeItem,
    updateItemQuantity,
    cartTotal
  } = useCart();
  const notify = () => toast("Cart deleted!");

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isEmpty) {
    return (
      <div className='text-center'>
        <h1 className='empty'>  {t("language.basket.cartisempty")}</h1>
      </div>
    )
  }
  return (
   <>
    <div className="container mt-5">

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">  {t("language.basket.img")}</th>
            <th scope="col"> {t("language.basket.title")}</th>
            <th scope="col"> {t("language.basket.price")}</th>
            <th scope="col">{t("language.basket.Quantity")} </th>
            <th scope="col"> {t("language.basket.Delete")}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((fd, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td><img src={fd.img} width="100" alt="" /></td>
              <td>{fd.title}</td>
              <td>{fd.price * fd.quantity}$</td>
              <td><button className='btn btn-primary' onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-1</button><span className='mx-2'>{fd.quantity}</span><button className='btn btn-primary' onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+1</button></td>
              <td><button className='btn btn-danger' onClick={() => { notify(removeItem(fd.id)) }}>{t("language.basket.Delete")}</button></td>
              <ToastContainer />
            </tr>
            
          ))}
        </tbody>
      </table>

          {/* ////////////////////////////////////// */}
 
      <h1 className=' Totalprice mt-5'> {t("language.basket.Totalprice")}: {cartTotal}$</h1>
       <div className="paybox">
        {isLoggedIn ? (
          <button className="buynow" onClick={()=>{items.forEach((fd) => removeItem(fd.id))}}>buy now</button>
        ):(
          <button className="buynow" onClick={() => alert('please log in')}>  {t("language.basket.BuyNow")}</button>
        )}
       </div>
    </div>

    <ShopSection1/>
    <ShopSection2/>
   </>
)
}

export default Cart