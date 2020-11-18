import React from 'react'
import {Route, Switch} from 'react-router-dom'

import AddProduct from '../product/AddProduct'
import GetAllProducts from '../product/GetAll'
import getMakeUp from '../product/GetMakeUp'
import getSkinCare from '../product/GetSkinCare'

const Main = (props) => (
    <Switch>
        <Route exact path="/" component={GetAllProducts}></Route>
        <Route exact path="/product/add" component={AddProduct}></Route>
        <Route exact path="/Skin care" component={getSkinCare}></Route>
        <Route exact path="/Make up" component={getMakeUp}></Route>
    </Switch>
)

export default Main