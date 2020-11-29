import React from 'react'

import Dropdown from "./Dropdown"

const Category = (props) => {
    const dropdown = [{
        content: [
            {link: "/", text: "All"},
            {link: "/Skin care", text:"Skin care"},
            {link: "/Make up", text: "Make up"}
        ],
        current: props.category ? props.category : "All"
    }]
    return (
        <div className="button-group">
            {
                dropdown.map((elem, index) => {
                    return <Dropdown key={index} content={elem.content} current={elem.current}/>
                })
            }
        </div>
    )
}

export default Category