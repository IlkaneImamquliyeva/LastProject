import React from 'react'


const BlogCart = ({ title, price, image }) => {
      return (

            <>
                  <div className='cardblog  col-lg-3 col-md-4 col-6'>
                        <img src={image} alt="error" width="100%" height="350px" />
                        <div className='info'>
                              <h1>{title}</h1>
                              <p>{price}$</p>
                        </div>
                  </div>
            </>
      )
}

export default BlogCart




