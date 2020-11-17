import React from 'react'
import {Route, Switch} from 'react-router-dom'

import AddProduct from '../product/AddProduct'
import GetAllProducts from '../product/GetAll'

const Main = (props) => (
    <Switch>
        <Route exact path="/product/add" component={AddProduct}></Route>
        <Route exact path="/" component={GetAllProducts}></Route>
    </Switch>
)

export default Main