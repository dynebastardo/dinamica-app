import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from 'axios'
import Slider from "./ui-objects"
import "./../css/clean.css"

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.changePwdFieldType = this.changePwdFieldType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
            showPass: false,
            pwdFieldType: "password"
        }
    }

    handleTextChange(evt) {
        this.setState({
            [evt.target.id]: evt.target.value
        });
    }

    handleCheckChange(id, checked, callback) {
        this.setState({
            [id]: checked
        }, () => {
            if (callback) {
                this[callback](checked);
            }
        });
    }

    changePwdFieldType(checked) {
        if (checked) {
            this.setState({
                pwdFieldType: "text"
            });
        } else {
            this.setState({
                pwdFieldType: "password"
            });
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const url = "http://localhost:8084/DinamicaServices/JsonParserServlet?action=login";
        const credentials = btoa(this.state.username + ":" + this.state.password);
        const basicAuth = "Basic " + credentials;
        const config = {
            // mode: 'no-cors',
            headers: {
                'Authorization': basicAuth,
                'Access-Control-Allow-Origin': '*'
            }
        };
        axios.get(url, config)
            .then(res => console.log(res.data))
            .catch(err => console.log("Axios call failed to url " + url + " " + err));
        return false;
    }

    render() {
        return(
            <div id="login" className="login">
                <form method="post" onSubmit={this.handleSubmit}>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="form-group"><input id="username" className="form-control" type="text" name="email" placeholder="Email" value={this.state.username} onChange={this.handleTextChange}/>
                    </div>
                    <div className="form-group"><input id="password" className="form-control" type={this.state.pwdFieldType} name="password" placeholder="Password" value={this.state.password} onChange={this.handleTextChange}/>
                    </div>
                    <div className="form-group">
                        {/*<Slider id="showPass" updateState={this.handleCheckPwdChange}/>*/}
                        <Slider id="showPass" updateState={e => this.handleCheckChange('remember', e, 'changePwdFieldType')}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Log In</button>
                    </div>
                    <a href="#" className="forgot">Forgot your email or password?</a>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<LoginForm/>, document.getElementById("react"));