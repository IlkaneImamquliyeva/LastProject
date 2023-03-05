import { Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import '../../Config/i18n'
import { useTranslation } from "react-i18next";
import { useWishlist } from 'react-use-wishlist';
import img1 from "../../imgs/loginimg/img2.png"

const activeStyle = {
  color: "#FF8411"
}

const Nav = () => {
  const { totalWishlistItems } = useWishlist();
  const { totalItems } = useCart();
  const { t } = useTranslation();

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const email = localStorage.getItem('userEmail');
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.reload();

  };

  return (
    <>
      <nav className="navbar text-white  ">
        <div className="container">
          <div className=" col-lg-2 col-12 d-flex justify-content-lg-start justify-content-center  logo">
            {/* --logo-start */}
            <img src="https://cdn.shopify.com/s/files/1/0613/0810/8999/files/logo_100x.png?v=1645525876" alt="" />
          </div>
          {/* --logo-end */}
          {/* --navbar-start */}
          <div className=" nav col-lg-7 col-12   d-flex align-items-center justify-content-center ">
            <ul className=" d-flex align-items-center justify-content-center mt-lg-2 mt-4 mb-lg-0 mb-4">
              <li className="nav-item ">
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link active" aria-current="page" to="/">{t("language.home.home")}</NavLink>
              </li>
              {/* <li className="nav-item ms-1"> */}
              {/* <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link " to="/about">{t("language.home.about")}</NavLink> */}
              {/* </li> */}
              <li className="nav-item  ms-1">
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link toggle" to="/shop">{t("language.home.shop")}</NavLink>
              </li>
              <li className="nav-item ms-1">
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link " to="/blog">{t("language.home.blog")}</NavLink>
              </li>
              <li className="nav-item ms-1">
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link " to="/contact">{t("language.home.contact")}  </NavLink>
              </li>
            </ul>
          </div>
          {/* --navbar-end-- */}
          {/* --button-start-- */}
          <div className="icon col-lg-2 col-12 d-flex justify-content-evenly  ">

              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link  " to="/search">
              <button className='nav-icon-search me-1' ><i className=" fa-solid fa-magnifying-glass" /></button>
            </NavLink>

            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link  " to="/wishlist">
              <button className='nav-icon-search me-1'><i className="fa-solid  fa-heart">({totalWishlistItems})</i></button>
            </NavLink>

            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="nav-link " to="/basket">
              <button className='nav-icon-basket me-1'><i className=" fa-solid fa-basket-shopping" />({totalItems})</button>
            </NavLink>
            <div className="lll">
              {isLoggedIn && email ? (

                <div className="test">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="loginimg"><img src={img1} alt="" /></div>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="#">    <p style={{ color: "gray" }}><i className="fa-solid fa-user"></i>{email}</p></Link></li>
                      <li><Link className="dropdown-item" href="#"><button onClick={handleLogout}>log out</button></Link></li>
                    </ul>
                  </div>

                </div>
              ) : (
                <NavLink className="nav-link " to="/Signin">
                  <button className='nav-icon-login me-4'><i className="fa-solid fa-user"></i> </button>
                </NavLink>
              )}
            </div>

          </div>
          {/* --button-end-- */}
        </div>
      </nav>

    </>

  )
}

export default Nav;












