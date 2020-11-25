import React from 'react'
import axios from 'axios'
import CodeGenerator from '../utils/InputGenerator'
import '../App.css'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmed: "",
            error: "",
            message: {},
            success: false
        }
        this.onAlertClose = this.onAlertClose.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onPasswordConfirm = this.onPasswordConfirm.bind(this)
        this.onFirstnameChange = this.onFirstnameChange.bind(this)
        this.onLastnameChange = this.onLastnameChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onAlertClose(e){
        e.preventDefault()
        this.setState({
            success: false
        }, () => {
            this.props.history.push("/login")
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

    onPasswordConfirm(e){
        this.setState({
            confirmed: e.target.value
        })
    }

    onFirstnameChange(e){
        e.preventDefault()
        this.setState({
            firstname: e.target.value
        })
    }

    onLastnameChange(e){
        e.preventDefault()
        this.setState({
            lastname: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        if(this.state.password !== this.state.confirmed){
            return
        }
        let user = new FormData();
        user.append('firstname',this.state.firstname)
        user.append('lastname',this.state.lastname)
        user.append('email',this.state.email)
        user.append('password',this.state.password)
        axios.post(`${process.env.REACT_APP_SERVER}/v1/signup`,user)
        .then(res => {
            if(res && res.status === 201){
                this.setState({
                    success: true,
                    message: {},
                    error: ""
                })
            }
        })
        .catch(error => {
            console.log(error)
            if(error.response && error.response.status === 400 && error.response.data && error.response.data.error){
                if(typeof error.response.data.error === "object"){
                    const { firstname, lastname, email, password } = error.response.data.error
                    this.setState({
                        message: {
                            firstname: firstname ? `firstname ${firstname}` : "",
                            lastname: lastname ? `lastname ${lastname}` : "",
                            email: email ? `email ${email}` : "",
                            password: password ? `password ${password}` : ""
                        },
                        error: ""
                    })
                }
            }else{
                this.setState({
                    error: "error occurred during registration",
                    message: {}
                })
            }
        })

    }
 
    render(){
        return (
            <div className="container" style={{overflowX:"hidden"}}>
            <div className="notification is-primary" style={{display: this.state.success ? "block" : "none"}}>
                <button className="delete" onClick={this.onAlertClose}></button>
                registration was successful
            </div>
            <div className="columns">
                <div className="form">
                    <div className="box m-5 p-6">
                        <form method="post" onSubmit={this.onSubmit}>
                            <div className="field py-1">
                                <CodeGenerator rules={{ type: 'text', label: 'Firstname', name: 'firstname',
                                    func: this.onFirstnameChange
                                }} />
                                <p className="has-text-danger respond">{this.state.message.firstname}</p>
                            </div>
                            <div className="field py-1">
                                <CodeGenerator rules={{ type: 'text', label: 'Lastname', name: 'lastname',
                                    func: this.onLastnameChange
                                }} />
                                <p className="has-text-danger respond">{this.state.message.lastname}</p>
                            </div>
                            <div className="field py-1">
                                <CodeGenerator rules={{ type: 'email', label: 'E-mail', name: 'email',
                                    func: this.onEmailChange
                                }} />
                                <p className="has-text-danger respond">{this.state.message.email}</p>
                            </div>
                            <div className="field py-1">
                                <CodeGenerator rules={{ type: 'password', label: 'Password', name: 'password',
                                    func: this.onPasswordChange
                                }} />
                                <p className="has-text-danger respond">{this.state.message.password}</p>
                            </div>
                            <div className="field py-1">
                                <CodeGenerator rules={{ type: 'password', label: 'Re-enter password', name: 'password',
                                    func: this.onPasswordConfirm
                                }} />
                                <p className="has-text-danger respond">{this.state.confirmed === "" || this.state.password === this.state.confirmed ? "" : "password must match"}</p>
                            </div>
                            <p className="has-text-danger respond">{this.state.error}</p>
                            <div className="field pt-1">
                                <input type="submit" name="submit" value="Sign up" className="button is-primary btn is-fullwidth"/>
                            </div>
                            <a href="/login"> <p className="user"> already have account? </p></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Signup