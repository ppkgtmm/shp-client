import React from 'react'
import CodeGenerator from '../utils/JSXGenerator'
import axios from 'axios'
import '../App.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            error: {
                email: "",
                all: ""
            }
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        let user = new FormData();
        user.append('email',this.state.email)
        user.append('password',this.state.password)
        axios.post(`${process.env.REACT_APP_SERVER}/v1/login`,user)
        .then(res => {
            if(res && res.status === 200 && res.data && res.data.data){
                if(res.data.data.token === undefined) throw Error("some error occurred")
                localStorage.setItem("token", res.data.data.token)
                this.props.history.push("/")
            }
        })
        .catch(error => {
            console.log(error)
            if(error.response && error.response.status === 400 && error.response.data && error.response.data.error){
                if(typeof error.response.data.error === "string"){
                    this.setState({
                        error: {
                            email: "",
                            all: error.response.data.error
                        }
                    })
                }
                else if(typeof error.response.data.error === "object"){
                    const {email} = error.response.data.error
                    this.setState({
                        error: {
                            email: email ? `email ${email}`: "",
                            all: ""
                        }
                    })
                }
            }else{
                this.setState({
                    error: {
                        email: "",
                        all: "error logging user in"
                    },
                })
            }
        })
    }

    onEmailChange(e){
        e.preventDefault()
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChange(e){
        e.preventDefault()
        this.setState({
            password: e.target.value
        })
    }
    render(){
        return (
            <div className="container py-6" style={{overflowX:"hidden"}}>
            <div className="columns">
                <div className="form">
                    <div className="box m-5 p-6">
                        <form method="post" onSubmit={this.onSubmit}>
                            <div className="field py-1">
                                <CodeGenerator rules={{ type: 'email', label: 'E-mail', name: 'email',
                                    func: this.onEmailChange
                                }} />
                                <p className="has-text-danger respond">{this.state.error.email}</p>
                            </div>
                            <div className="field py-1">
                                <CodeGenerator rules={{ type: 'password', label: 'Password', name: 'password',
                                    func: this.onPasswordChange
                                }} />
                            </div>
                            <p className="has-text-danger respond">{this.state.error.all}</p>
                            <div className="field pt-1">
                                <input type="submit" name="submit" value="Log in" className="button is-primary btn is-fullwidth"/>
                            </div>
                            <a href="/signup"> <p className="user"> not registered ? </p></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login