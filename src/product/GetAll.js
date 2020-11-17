import React from 'react'
import axios from 'axios'

import UpMenu from "./UpMenu"
import Product from "./Card"
import '../App.css'
class GetAllProducts extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            products: [],
            error: ""
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/v1/product').then(res => {
            if(res && res.data && res.status === 200 && res.data.data){
                this.setState({
                    products: res.data.data
                })
            }
            else{
                this.setState({
                    error: "error occurred while geting products"
                })
            }
        }).catch(error => {
            console.log(error)
            this.setState({
                error: "error occurred while geting products"
            })
        })
    }

    render(){
        const dropdown = [{
            title: "Category",
            content: [
                {link: "/", text: "All"},
                {link: "#", text:"Skin care"},
                {link: "#", text: "Make up"}
            ],
            current: "All"
        }]
        const buttons = [{
            name: "login"
        }]
        return (
            <div className="wrapper container mt-3">
                <UpMenu dropdown={dropdown} buttons={buttons}/>
                <div className="products is-flex-touch">
                    {this.state.products.map((product, index) => {
                        return <Product key={index} id={product._id} name={product.name} image={product.image}/>
                    })}
                </div>
            </div>
        )
    }
}

export default GetAllProducts