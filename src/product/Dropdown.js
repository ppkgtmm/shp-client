import React from 'react'
import '../App.css'
const Dropdown = ({title, content, current}) => {
    return (
        <div className={`dropdown is-hoverable`}>
        <div className="dropdown-trigger">
            <button className="button is-small has-text-dark  btn" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>{title}</span>
                <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
                {content.map((elem,index) => {
                    return (
                        <a  key={index+1} href={elem.link} className={`dropdown-item${current && current === elem.text ? ' is-active': ' has-text-dark'}`}>
                            {elem.text}
                            {console.log(elem.text, current)}
                        </a>
                    )
                })}
            </div>
        </div>
      </div>
    )
}

export default Dropdown