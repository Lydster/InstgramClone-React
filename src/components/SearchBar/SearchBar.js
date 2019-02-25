import React from 'react';
import './SearchBar.css'



const SearchBar = () => {
        return(
            <div className="SearchBar">
                <i className="fab fa-instagram fa-5x"></i>
                <img className="insta-logo" src='https://lh3.googleusercontent.com/CpSiI0QFEbw-R-Or2dcWMx-rFojEt1ERiRs4l11268Mx-yNQa_8EoqpYOA_9BicL2o-o8zs9m7ZlOgIgbsmd-_aeINRsosnF-d3ErSiNA44QZDM9EP_GImTL_R9tn0ZvjogNQJwzEw=w2400' width="200px" height="60px" />
                <input className="Search-bar" type="text" placeholder="Search" />
                
            </div>
        )
    
}

export default SearchBar;