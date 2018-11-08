import React, { Component } from "react"
import "./../css/styles.css"

class Slider extends Component {
    constructor(props) {
        super(props);

        this.handleCheckChange = this.handleCheckChange.bind(this);

        this.state = {
            checked: false
        }
    }

    handleCheckChange(evt) {
        this.setState({
            checked: !this.state.checked
        }, () => {
            this.props.updateState(this.state.checked);
        });
    }

    render () {
        return(
            <label className="switch">
                <input id="checkBox" checked={this.state.checked} type="checkbox" onChange={this.handleCheckChange}/>
                <span className="slider round"></span>
            </label>
        );
    }
}

export default Slider;