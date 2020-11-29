import React from 'react'
import More from './More'
import '../App.css'

import Search from "./SearchBar"

const UpMenu = (props) => {
    return (
        <div className="menu">
            <More isLoggedIn={props.isLoggedIn}/>
            <div className="up-menu">
            <Search />
            </div>
        </div>
    )
}

export default UpMenu