import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';
import { v4 as uuidv4 } from 'uuid';
import ShopSection1 from '../pages/Shop/ShopSection1';
import ShopSection2 from '../pages/Shop/ShopSection2';
import { useTranslation } from "react-i18next";

const AddBlog = () => {

  const { t } = useTranslation();
  const [img,setImg] = useState("");
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [movies,setMovies] = useContext(MovieContext);

  const updateImg = (e)=>{
    setImg(e.target.value)
}

  const updateTitle = (e)=>{
      setTitle(e.target.value)
  }
  const updatePrice = (e)=>{
      setPrice(e.target.value)
  }
  const navigate = useNavigate();
  const addMovie=(e)=>{
      e.preventDefault();
     setMovies(prevMovies=>[...prevMovies,{id:uuidv4(), img:img,title:title,price:price}]);
     navigate('/blog');
     
  }
  return (
    <>
    
    <div className='dashPage'>
          <div className='container'>

               <div className='dashBox'>
                  <form onSubmit={addMovie}>
            <Link to='/listboard'><button className='btnlist'> {t("language.dashboard.MoviesListBoard")}</button></Link>  
                     <div className='image'>
                          <p>{t("language.dashboard.Image")}:</p>
                          <input onChange={updateImg} type='text'></input>
                     </div>

                     <div className='title'>
                           <p>{t("language.dashboard.Title")}:</p>
                           <input onChange={updateTitle} type='text'></input>
                     </div>

                     <div className='price'>
                           <p> {t("language.dashboard.Price")}:</p>
                           <input onChange={updatePrice} type='text'></input>
                     </div>

                     <div className='buton'>
                           <button className='button-32'> {t("language.dashboard.ADD")}</button>
                     </div>
                  </form>
               </div>

          </div>

     </div>

<ShopSection1/>
<ShopSection2/>

</>
  )
}

export default AddBlog