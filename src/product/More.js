import React from 'react'
import User from './user.svg'
import Cart from './cart.svg'

import '../App.css'

const More = ({isLoggedIn}) => {
    return (
            <ul>
                <li>
                    <a href={isLoggedIn ? '/logout' : '/login'}> 
                        <img src={User} style={{width:20, height:20}}/>
                    </a>
                    <a href='/cart' style={{display: `${isLoggedIn ? 'block': 'none'}`}}> 
                        <img src={Cart} style={{width:20, height:20}}/>
                    </a>
                </li>
            </ul>
    )
}

export default More