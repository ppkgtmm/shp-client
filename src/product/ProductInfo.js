import React from 'react'
import axios from 'axios'

import Tag from "./Tag"
import Cart from "./cart.svg"

import '../App.css'

class ProductInfo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            product: {},
            error: "",
            quantity: 0
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onQuantityChange = this.onQuantityChange.bind(this)

    }
    onSubmit(e) {
        e.preventDefault()
        if(this.state.quantity === undefined) return
        const token = localStorage.getItem("token")
        if(token === undefined || token === null){
            let queue = localStorage.getItem("cartQueue") || "[]"
            queue = JSON.parse(queue)
            queue.push({
                id: this.state.product._id,
                quantity: this.state.quantity
            })
            localStorage.setItem("cartQueue", JSON.stringify(queue))
            this.props.history.push("/login")        
        }
        else{
            console.log("logged in")
        }
    }

    onQuantityChange(e){
        e.preventDefault()
        this.setState({
            quantity: e.target.value
        })
    }

    componentDidMount(){
        const { match } = this.props;
        const {id} = match.params;
        axios.get(`${process.env.REACT_APP_SERVER}/v1/product/id/${id}`).then(res => {
            if(res && res.data && res.status === 200 && res.data.data){
                this.setState({
                    product: res.data.data
                })
            }
            else{
                this.setState({
                    error: "error occurred while geting product information"
                })
            }
        }).catch(error => {
            console.log(error)
            this.setState({
                error: "error occurred while geting product information"
            })
        })
    }

    render(){
        return (
            <div className="wrapper container mt-3">
                <div className="product-card">
                    <div className="image"> 
                        <img src={this.state.product.image} alt={this.state.product.name} />
                    </div>
                    <div className="card-content box">
                        <div className="content">
                            <div className="info">
                                <p className="field">{this.state.product.name}</p>
                                <p>{this.state.product.brand} </p>
                                <Tag text={this.state.product.category}/>
                                <Tag text={`${this.state.product.stock} left`} />
                                <p className="price">{`${this.state.product.price} Baht`}</p>
                            </div>
                        </div>
                        <div>
                            <form method="post" onSubmit={this.onSubmit}>
                                <div className="add-cart-form field has-addons">
                                    <div className="control cart-add">
                                        <input className="input is-small" type="number" name="quantity" min="1" max={this.state.product.stock} step="1" required onChange={this.onQuantityChange}/>
                                    </div>
                                    <div className="control cart-add">
                                        <button type="submit" value="Submit"><img src={Cart} alt="Add to cart"/> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ProductInfo