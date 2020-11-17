import React from 'react'
import '../App.css'

const searchBar = (props) => {
    return (
        <div className="search">
                <div className="control is-small box">
                    <input className="input" type="text" placeholder="Type to search" />
                </div>
                <div className="control">
                    <input type="submit" name="submit" value="Search" className="button is-inline-block is-primary is-inverted btn"/>
                </div>
        </div>
    )
}

export default searchBar