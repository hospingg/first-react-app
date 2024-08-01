import React, { Component } from 'react';
import Square from "./Square"

class ParentSquare extends Component {
    constructor(props){
        super(props)
        this.state={
            render: true
        }
    }
    changeRender = () =>{
        this.setState({
            render: !this.state.render
        })
    }
    render() {
        return (
            <div className='task-container'>
                <h2>Task 3:</h2>
                <button onClick={this.changeRender} className='btn'>
                    Create Square
                </button>
                {this.state.render? <Square /> : null}
            </div>
        );
    }
}

export default ParentSquare;

