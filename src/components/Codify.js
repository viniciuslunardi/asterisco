import React, {Component} from 'react';

import './Codify.css';

export default class Codify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: "",
            result: ""
        }

        this.converter = this.converter.bind(this);
    }

    converter() {
        let result = "";
        if (this.state.msg) {
            const w = this.state.msg.split(" ");
            for (let word of w) {
                word = word.trim();
                for (let i = 0; i < word.length; i++) {
                    result += "*";
                }
                result += " ";
            }
        }

        this.setState({result});
    }

    render() {
        return (
            <div className="codify">
                <h2>Aff ta em asterisco</h2>
                <input type="text" onChange={(event) => {
                    this.setState({msg: event.target.value})
                }}></input>
                <input type="button" value="converter" onClick={this.converter}></input>
                <h2>Resultado:  {this.state.result}</h2>
            </div>
        )
    }
}
