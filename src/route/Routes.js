import React from 'react'
import {Route, Switch} from 'react-router-dom'

import AddProduct from '../product/AddProduct'
import GetAllProducts from '../product/GetAll'
import GetMakeUp from '../product/GetMakeUp'
import GetSkinCare from '../product/GetSkinCare'
import ProductInfo from '../product/ProductInfo'


const Main = (props) => (
    <Switch>
        <Route exact path="/" component={GetAllProducts}></Route>
        <Route exact path="/product/add" component={AddProduct}></Route>
        <Route exact path="/Skin care" component={GetSkinCare}></Route>
        <Route exact path="/Make up" component={GetMakeUp}></Route>
        <Route exact path="/product/:id" component={ProductInfo}></Route>
    </Switch>
)

export default Main