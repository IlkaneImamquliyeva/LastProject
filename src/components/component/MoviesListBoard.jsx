import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext';
import ShopSection1 from '../pages/Shop/ShopSection1';
import ShopSection2 from '../pages/Shop/ShopSection2';
import { useTranslation } from "react-i18next";



const MoviesListBoard = () => {
  const { t } = useTranslation();
    const [movies,setMovies] = useContext(MovieContext);

    const deleteMovies = (id)=>{
         setMovies(movies.filter(movies => movies.id !== id))
    }

  return (
    <>
       <section className='listboard'>
             <div className='container'>
                    <table className="table">
                         <thead>
                           <tr>
                             <th scope="col">  {t("language.dashboard.Title")}</th>
                             <th scope="col">{t("language.dashboard.Price")}</th>
                             <th scope="col">{t("language.dashboard.Actions")}</th>
                           </tr>
                        
                         </thead>
                         <tbody>
                            {movies.map((fd,i)=>(
                                <tr key={i}>
                                  <td>{fd.title}</td>
                                  <td>{fd.price}</td>
                                  <td><button onClick={()=>deleteMovies(fd.id)} className='btntrash'>{t("language.dashboard.Delete")}</button>  
                                      <Link to={`/edit/${fd.id}`}><button className='btnedit'>{t("language.dashboard.Edit")}</button></Link> 
                                  </td>
                                </tr>
                            ))}
                         </tbody>
                    </table>

             </div>

       </section>

       <ShopSection1/>
       <ShopSection2/>
    </>
  )
}

export default MoviesListBoard