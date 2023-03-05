import React from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../sass/style.css';
import Nav from '../pages/Home/Nav';
import Home from '../pages/Home';
// import About from '../pages/About';
import Header from '../pages/Home/Header';
import Shop from '../pages/Shop';
import Footer from '../pages/Home/Footer';
import CoatsJackets from '../pages/Shop/ShopbyCategory/CoatsJackets/CoatsJackets';
import Accessories from '../pages/Shop/ShopbyCategory/Accessories/Accessories';
import { CardHomeProvider } from '../context/CardHomeContext';
import Sweaters from '../pages/Shop/ShopbyCategory/Sweaters/Sweaters';
import Pajamas from '../pages/Shop/ShopbyCategory/Pajamas/PajamasOnesies';
import BootsSocks from '../pages/Shop/ShopbyCategory/BootsSocks/BootsSocks';
import Sports from '../pages/Shop/ShopbyCategory/Sports/Sports';
import OutdoorGear from '../pages/Shop/ShopbyCategory/OutdoorGear/OutdoorGear';
import Hoodies from '../pages/Shop/ShopbyCategory/Hoodies/Hoodies';
import Shirts from '../pages/Shop/ShopbyCategory/Shirts/Shirts';
import Dress from '../pages/Shop/ShopbyCategory/Dress/Dress';
import AddMovies from '../form/AddBlog';
import EditMovies from '../form/EditBlog';
import MoviesListBoard from '../component/MoviesListBoard';
import { MovieProvider } from '../context/MovieContext';
import Contact from '../pages/Contact';
import Cart from '../pages/Basket/Cart';
import { CartProvider } from "react-use-cart";
import Blog from '../pages/Blog';
import SignIn from '../pages/SIGN IN/SignIn';
// import ReadMore from '../pages/Shop/ReadMore/ReadMore';
// import ProductDetails from '../component/ProductDetails';
import { WishlistProvider } from 'react-use-wishlist';
import Wishlist from '../pages/Wishlist/Wishlist';
import Search from '../pages/Search/Search';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <WishlistProvider>
          <MovieProvider>
            <CardHomeProvider>
              <Header />
              <Nav />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                {/* <Route path='/about' element={<About />}></Route> */}
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/search' element={<Search/>}></Route>

            <Route path='/wishlist' element={<Wishlist />}></Route>
                <Route path='/basket' element={<Cart />}></Route>
                <Route path='/Signin' element={<SignIn/>}></Route>
                {/* <Route path='/readmore' element={<ReadMore/>}></Route> */}
                <Route path='/CoatsJackets' element={<CoatsJackets />}></Route>
                <Route path='/Sweaters' element={<Sweaters />}></Route>
                <Route path='/Pajamas' element={<Pajamas />}></Route>
                <Route path='/BootsSocks' element={<BootsSocks />}></Route>
                <Route path='/Accessories' element={<Accessories />}></Route>
                <Route path='/Sports' element={<Sports />}></Route>
                <Route path='/OutdoorGear' element={<OutdoorGear />}></Route>
                <Route path='/Hoodies' element={<Hoodies />}></Route>
                <Route path='/Shirts' element={<Shirts />}></Route>
                <Route path='/Dress' element={<Dress />}></Route>
                <Route path='/add' element={<AddMovies />}></Route>
                <Route path='/edit/:url' element={<EditMovies />}></Route>
                <Route path='/listboard' element={<MoviesListBoard />}></Route>
            {/* <Route path='/products/:id' element={<ProductDetails/>}></Route> */}

      
              </Routes>
              <Footer />
            </CardHomeProvider>
          </MovieProvider>
        </WishlistProvider>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}

export default AppRouter;