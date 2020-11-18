import React from 'react'
import axios from 'axios'
import UpMenu from "./UpMenu"
import Product from "./ProductCard"
import '../App.css'
class GetByCategory extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            products: [],
            error: "",
            category: ""
        }
        this.getAll = this.getAll.bind(this)
        this.getByCategory = this.getByCategory.bind(this)
    }

    getAll(){
        axios.get(`${process.env.REACT_APP_SERVER}/v1/product`).then(res => {
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

    getByCategory(){
        axios.get(`${process.env.REACT_APP_SERVER}/v1/product/category/${this.state.category}`).then(res => {
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

    componentDidMount(){
        this.setState({
            category: this.props.category ? this.props.category : "All"
        }, () => {
            if(this.state.category === "All") this.getAll()
            else this.getByCategory()
        })
    }

    render(){
        const dropdown = [{
            title: "Category",
            content: [
                {link: "/", text: "All"},
                {link: "/Skin care", text:"Skin care"},
                {link: "/Make up", text: "Make up"}
            ],
            current: this.props.category ? this.props.category : "All"
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

export default GetByCategory