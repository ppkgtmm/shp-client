import React from 'react'
import axios from 'axios'

import Tag from "./Tag"
import Cart from "./cart.svg"

import '../App.css'

class ProductInfo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            product: [],
            error: ""
        }

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
                    {this.state.product.map((item, index) => {
                        return (
                           <div className="product-card" key={index+1}>
                               <div className="image"> 
                               <img src={item.image} alt={item.name} />
                               </div>
                                <div className="card-content box">
                                    <div className="content">
                                        <div className="info">
                                            <p className="field">{item.name}</p>
                                            <p>{item.brand} </p>
                                            <Tag text={item.category}/>
                                            <Tag text={`${item.stock} left`} />
                                            <p className="price">{`${item.price} Baht`}</p>
                                        </div>
                                    </div>
                                    <div>
                                    <form>
                                        <div className="add-cart-form field has-addons">
                                            <div className="control cart-add">
                                                <input className="input is-small" type="number" name="quantity" min="0" max={item.stock} step="1" required />
                                            </div>
                                            <div className="control cart-add">
                                                <button type="submit" value="Submit"><img src={Cart} alt="Add to cart"/> </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                </div>
                           </div> 
                        )
                    })}
            </div>
        )
    }
}

export default ProductInfo