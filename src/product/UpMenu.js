import React from 'react'
import '../App.css'

import Dropdown from "./Dropdown"
import Search from "./Search"
const upMenu = ({dropdown, buttons}) => {
    return (
        <div className="up-menu">
            <Search />
            <div className="button-group mt-1">
                {dropdown.map((elem, index) => {
                    return <Dropdown key={index} title={elem.title} content={elem.content} current={elem.current}/>
                })}
                {buttons.map((elem, index) =>{
                    return <a key={index} href="" className="button is-small has-text-dark btn">{elem.name}</a>
                })}
            </div>
        </div>
    )
}

export default upMenu