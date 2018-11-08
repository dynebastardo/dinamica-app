import React, { Component } from "react";
import '../css/login.css';
import ReactDOM from "react-dom";
import axios from "axios";
import logger from "./logger";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);

        this.state = {
            dmUsername: '',
            dmPassword: '',
            rememberPwd: true
        }
    }

    loginSubmit() {
        axios.get("http://localhost:8084/DinamicaServices/JsonParserServlet").then(
            response =>  {
                this.setState({
                    rememberPwd: response.data.success
                });
            }
        )
    }

    handleTextChange(evt) {
        this.setState({
            [evt.target.id]: evt.target.value
        });
    }

    render() {
        logger.log();
        return(
            <div className="dm-login-back" style={{backgroundImage: `url(${require('../assets/wallpaper.jpg')})`}}>
                {/*<img src={require('../assets/wallpaper.jpg')}/>*/}
                <div className="dm-login-form">
                    <form onSubmit={this.loginSubmit}>
                        <input className="inputText"
                               type="text"
                               id="dmUsername"
                               value={this.state.dmUsername}
                               onChange={this.handleTextChange}
                               onDoubleClick={this.loginSubmit}/>
                        <label htmlFor="dmUsername" id="dmLblUsername">Usuário</label>
                        <input className="inputText"
                               type="text"
                               id="dmPassword"
                               value={this.state.dmPassword}
                               onChange={this.handleTextChange}/>
                        <label htmlFor="dmPassword" id="dmLblPassword">Senha</label>
                    </form>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<LoginForm/>, document.getElementById("react"));