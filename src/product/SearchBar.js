import React, { useState } from 'react'

import Category from './Category'
import '../App.css'

function onSubmit(e,keyword) {
    e.preventDefault()
    console.log(keyword)
}

function onChange(e) {
    e.preventDefault()
    return e.target.value
}

const SearchBar = (props) => {
    const [keyword, setKeyword] = useState("")
    return (
        <div className="search">
            <form method="post" onSubmit={(e) => onSubmit(e, keyword)}>
                <div className="control is-small search-box">
                    <input className="input" type="text" placeholder="Type to search" onChange={ e => setKeyword(onChange(e)) }/>
                </div>
                <div className="control search-btn">
                    <input type="submit" name="submit" value="Search" className="button is-inline-block is-primary btn"/>
                </div>
            </form>
            <Category />
        </div>
    )
}

export default SearchBar