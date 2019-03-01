import React from 'react';
import './SearchBar.css'
import * as Icon from 'react-feather';


const SearchBar = props => {
        return(
            <div className="SearchBar">
                <i className="fab fa-instagram fa-3x"></i>
                <img className="insta-logo" src='https://lh3.googleusercontent.com/CpSiI0QFEbw-R-Or2dcWMx-rFojEt1ERiRs4l11268Mx-yNQa_8EoqpYOA_9BicL2o-o8zs9m7ZlOgIgbsmd-_aeINRsosnF-d3ErSiNA44QZDM9EP_GImTL_R9tn0ZvjogNQJwzEw=w2400' width="200px" height="60px" />
                <input 
                    className="Search-bar" 
                    type="text" 
                    placeholder='🔍 Search' 
                    onChange={props.searchBarHandler}
                    />
                <div className="right-icons">
                    <Icon.Compass className='navIcons' />
                    <Icon.Heart className='navIcons' />
                    <Icon.User className='navIcons' />
                </div>
                
            </div>
        )
}


export default SearchBar;