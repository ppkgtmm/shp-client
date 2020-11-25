import React from 'react'
import '../App.css'

import Dropdown from "./Dropdown"
import Search from "./SearchBar"
const UpMenu = (props) => {
    const dropdown = [{
        title: "Category",
        content: [
            {link: "/", text: "All"},
            {link: "/Skin care", text:"Skin care"},
            {link: "/Make up", text: "Make up"}
        ],
        current: props.category ? props.category : "All"
    }]
    const buttons = [{
        name: "Login"
    }]
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

export default UpMenu