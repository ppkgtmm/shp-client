import React from 'react'
import {Route, Switch} from 'react-router-dom'

import AddProduct from '../product/AddProduct'
import GetAllProducts from '../product/GetAllProducts'
import GetMakeUp from '../product/GetMakeUp'
import GetSkinCare from '../product/GetSkinCare'
import ProductInfo from '../product/ProductInfo'
import Login from '../user/Login'
import Signup from '../user/Signup'

const Main = (props) => (
    <Switch>
        <Route exact path="/" component={GetAllProducts}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/product/add" component={AddProduct}></Route>
        <Route exact path="/Skin care" component={GetSkinCare}></Route>
        <Route exact path="/Make up" component={GetMakeUp}></Route>
        <Route exact path="/product/:id" component={ProductInfo}></Route>
    </Switch>
)

export default Main