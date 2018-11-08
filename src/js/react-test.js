import React, { Component } from "react";
import ReactDOM from "react-dom";

const status = [4,2,4,4,2,5,1,6,7,5,6,8,2,7];

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Diego",
            data: [4,2,4,4,2,5,1,6,7,5,6,8,2,7],
            array: status
        };
    }

    piroco() {
        var options = [];
        status.map((element,index) => {
            options.push(<h1 key={index} onClick={function() {alert(`Indice ${index+1}`)}}>{element}</h1>);
        });
        return(options);
    }

    render() {
        return(this.piroco());
    }
}
export default Test;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Test />, wrapper) : false;