import React, { Component } from "react";

class Selection extends Component {
    constructor(props) {
        super(props);
            this.state = {
                background:'',
            }
    }
    render () {
        return (
            <div className="fix-box" onClick={props.applyColor}>
                <h2 className="subheading">Selection</h2>
            </div>
        );
    }
    
}

export default Selection;