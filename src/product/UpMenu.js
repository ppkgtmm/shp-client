import React from 'react'
import More from './More'
import Search from './Search'
import Category from './Category'

import '../App.css'


const UpMenu = ({category, isLoggedIn}) => {
    return (
        <div className="menu">
            <More isLoggedIn={isLoggedIn}/>
            <div className="up-menu">
                <div className="search">
                    <Search />
                    <Category category={category}/>
                </div> 
            </div>
        </div>
    )
}

export default UpMenu