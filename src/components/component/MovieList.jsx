import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import BlogCart from '../pages/Blog/BlogCart';


const MovieList = () => {
  const [movies] = useContext(MovieContext);
  return (
    <>
      <div className='container '>
        <div className="row  justify-content-evenly">
          {movies.map((fd, i) => (
            <BlogCart title={fd.title} price={fd.price} image={fd.img} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieList