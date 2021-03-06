import React from 'react'
import axios from 'axios'
import CodeGenerator from '../utils/InputGenerator'
import '../App.css'

class AddProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            category: 'Skin care',
            brand: '',
            price: 0.00,
            stock: 0,
            image: "",
            errors: {},
            message: { error: "", success: "" }
        }
    
        this.onSubmit = this.onSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onSelect = this.onSelect.bind(this)
        this.onBrandChange = this.onBrandChange.bind(this)
        this.onPriceChange = this.onPriceChange.bind(this)
        this.onStockChange = this.onStockChange.bind(this)
        this.onFileChange = this.onFileChange.bind(this)
    }

    onSubmit = (e) => {
        e.preventDefault()
        let product = new FormData();
        product.append('name',this.state.name)
        product.append('category',this.state.category)
        product.append('brand',this.state.brand)
        product.append('price',this.state.price)
        product.append('stock',this.state.stock)
        product.append('image',this.state.image)
        axios.post(`${process.env.REACT_APP_SERVER}/v1/product`,product).then((res)=>{
            if(res && res.status === 201){
                this.setState({
                    ...this.state.message,
                    message: {
                        error: "",
                        success: "product successfully added"
                    },
                    errors: {}
                })
            }
        }).catch(err => {
            console.log(err)
            if(err.response && err.response.status === 400 && err.response.data && err.response.data.error){
                if(typeof err.response.data.error === "object"){
                    let {name, category, brand, price, stock, image} = err.response.data.error
                    name = name ? `name ${name}` : ""
                    category = category ? `category ${category}` : ""
                    brand = brand ? `brand ${brand}` : ""
                    price = price ? `price ${price}` : ""
                    stock = stock ? `stock ${stock}` : ""
                    image = image ? `image ${image}` : ""
                    this.setState({
                        errors: {
                            name, category, brand, price, stock, image
                        },
                        message: { ...this.state.message, success: "" }
                    })
                }

            }
            else{
                this.setState({
                    message: {
                        success: "",
                        error:  "error adding product"
                    },
                    errors: {}
                })
            }
        })
    }

    onNameChange = (e) => {
        e.preventDefault()
        this.setState({
            name: e.target.value,
            message: { error: "", success: "" }
        })
    }

    onSelect = (e) => {
        e.preventDefault()
        this.setState({
            category: e.target.value,
            message: { error: "", success: "" }
        })
    }

    onBrandChange = (e) => {
        e.preventDefault()
        this.setState({
            brand: e.target.value,
            message: { error: "", success: "" }
        })
    }

    onPriceChange = (e) => {
        e.preventDefault()
        this.setState({
            price: e.target.value,
            message: { error: "", success: "" }
        })
    }

    onStockChange = (e) => {
        e.preventDefault()
        this.setState({
            stock: e.target.value,
            message: { error: "", success: "" }
        })
    }

    onFileChange = (e) => {
        e.preventDefault()
        this.setState({
            image: e.target.files[0],
            message: { error: "", success: "" }
        })
    }
    render(){
        return (
                <div className="container" style={{overflowX:"hidden"}}>
                    <div className="columns">
                        <div className="form">
                            <div className="box m-5 p-6">
                                <form method="post" onSubmit={this.onSubmit}>
                                    <div className="field py-1">
                                        <CodeGenerator rules={{ type: 'text', label: 'Product name', name: 'name',
                                            func: this.onNameChange
                                        }} />
                                        <p className="has-text-danger">{this.state.errors.name}</p>
                                    </div>
                                    <div className="field py-1">
                                        <div className="control">
                                            <p>Category:</p>
                                            <div className="select is-small" style={{display:"block"}}>
                                                <select name="category" className="select" style={{width:"100%"}}
                                                value={this.state.category} required onChange={this.onSelect}>
                                                    <option value="Skin care"> 
                                                        Skin care
                                                    </option>
                                                    <option value="Make up"> 
                                                        Make up
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <p className="has-text-danger">{this.state.errors.category}</p>
                                    </div>
                                    <div className="field py-1">
                                        <CodeGenerator rules={{ type: 'text', label: 'Brand', name: 'brand',
                                            func: this.onBrandChange
                                        }} />
                                        <p className="has-text-danger">{this.state.errors.brand}</p>
                                    </div>

                                    <div className="field py-1">
                                        <CodeGenerator rules={{ type: 'number', label: 'Price', name: 'price',
                                            min: 0, step: 0.01, func: this.onPriceChange
                                        }}/>
                                        <p className="has-text-danger">{this.state.errors.price}</p>

                                    </div> 
                                    <div className="field py-1">
                                        <CodeGenerator rules={{ type: 'number', label: 'Stock', name: 'stock',
                                            min: 0, step: 1, func: this.onStockChange
                                        }}/>
                                        <p className="has-text-danger">{this.state.errors.stock}</p>
                                    </div>

                                    <div className="field py-1">
                                        <div className="control">
                                            <p>Picture:</p>
                                            <div className="file has-name is-small is-right is-fullwidth">
                                                <label className="file-label">
                                                    <input className="file-input" type="file" name="image" accept="image/*" required onChange={this.onFileChange}/>
                                                        <span className="file-cta">
                                                            <span className="file-label">
                                                                Choose a file…
                                                            </span>
                                                        </span>
                                                        <span className="file-name">
                                                            {this.state.image.name}
                                                        </span>
                                                </label>
                                            </div>   
                                        </div>
                                        <p className="has-text-danger">{this.state.errors.image}</p>
                                    </div>
                                    <p className="has-text-success respond">{this.state.message.success}</p>
                                    <p className="has-text-danger respond">{this.state.message.error}</p>
                                    <div className="field">
                                        <input type="submit" name="submit" value="Upload" className="button is-primary btn is-fullwidth"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
 
}



export default AddProduct