import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';
import { useTranslation } from "react-i18next";



const EditBlog = () => {
  const { t } = useTranslation();
     const [movies, setMovies] = useContext(MovieContext);
     const { url } = useParams();
     const editItems = movies.find(p => p.id === url);
   
     const [img, setImg] = useState(editItems.img);
     const [title, setTitle] = useState(editItems.title);
     const [price, setPrice] = useState(editItems.price);
   
     const navigate = useNavigate();
   
     const handleSubmit = (e) => {
       e.preventDefault();
       setMovies(
         movies.map(movie =>
           movie.id === editItems.id
             ? { ...movie, img, title, price }
             : movie
         )
       );
       navigate("/blog");
     };
   
     return (
       <>
          <br /><br />
      <div className="editmovies">
        <form className="editform" onSubmit={handleSubmit}>
          <br /><br />
          {/* <div className="image"> */}
            <input
              type="text"
              value={img}
              onChange={e => setImg(e.target.value)}
            />
          {/* </div> */}

          {/* <div className="title"> */}
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          {/* </div> */}

          {/* <div className="price"> */}
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          {/* </div> */}

          <div className="buton">
            <button className="button-41">  {t("language.dashboard.Edit")}</button>
          </div>
        </form>
      </div>
       </>
     );
   };
   
   export default EditBlog;
   