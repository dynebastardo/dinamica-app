import React, { Component } from "react"
import ReactDOM from "react-dom"
import Slider from "./ui-objects"
import "./../css/clean.css"

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.changePwdFieldType = this.changePwdFieldType.bind(this);

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

    render() {
        return(
            <div id="login" className="login">
                <form method="post">
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="form-group"><input id="username" className="form-control" type="email" name="email" placeholder="Email" value={this.state.username} onChange={this.handleTextChange}/>
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