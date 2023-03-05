// import React from 'react'
// import { useParams } from 'react-router-dom'
// import moviedata from '../data/moviedata';


// // Read more seyfesi

// const ProductDetails = () => {
//     const {id} = useParams();
//     const detailItems = moviedata.find(p => p.id === id)

//   return (
//  <div className="container info col-xxl-8 mt-5 px-5 ">
//   <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//     <div className= " info2 col-10 col-sm-8 col-lg-6">
//       <img src={detailItems?.img} className="d-block     mx-lg-auto img-fluid" alt="Bootstrap Themes" width={200} height={500} loading="lazy" />
//     </div>
//     <div className="col-lg-6">
//       <h1 className="display-5 fw-bold lh-1 mb-3">{detailItems?.title}</h1>
//       <div className="d-grid gap-2 d-md-flex justify-content-md-start">
//         <button type="button" className="btn btn1 btn-primary btn-lg px-4 me-md-2">Add to cart</button>
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default ProductDetails