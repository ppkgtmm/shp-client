import React from 'react'
import '../App.css'

const productCard = ({id, name, image}) => {
    return (
        <div className="box">
            <a href={`/product/${id}`}> <img src={image} alt={name}/> </a>
            <a href={`/product/${id}`}> <p> {name} </p> </a>
        </div>
    )
}

export default productCard