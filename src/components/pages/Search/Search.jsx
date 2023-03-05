import React, { useState } from "react";
import searchdata from "../../data/searchdata"
import 'react-toastify/dist/ReactToastify.css';
import Item from "../Shop/ShopbyCategory/Sports/Item";


const Search = () => {
   
   
    const [query, setQuery] = useState("");



    return (
        <>
            {/* ----search-input--start */}
            <div className="col-6 searchinput">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                >
                    Search
                </button>
            </div>
            {/* ----search-input--end */}
            {/* ----search-cart--start */}
            <div className="search" data-aos="fade-up" data-aos-duration="3000" >
                <div className="container">
                    <div className="row">
                        {searchdata.filter(u => u.title.toLocaleLowerCase().includes(query)).map((fd, i) => {
                   return <Item ctitle={fd.title}
                   cprice={fd.price}
                   cimg={fd.img}
                   addproduct={fd}
                   allwishlist={fd}
                   id={fd.id}/> 
                        }
                        )}
                    </div>
                </div>
            </div>
            {/* ----search-cart--end */}
        </>
    );
};

export default Search;



















