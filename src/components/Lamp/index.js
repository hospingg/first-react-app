import React, { Component } from 'react';
import './style.css'
import '../style.css'

class Lamp extends Component {
    constructor(props){
        super(props)
        this.state={
            isOn: false,
        }
    } 
    turnLamp = () => {
            this.setState({
                isOn: !this.state.isOn
            })
        }
    render() {
        const isLampActivate = this.state.isOn ? 'lamp-activate' : null
        return (
            <div className='task-container'>
                <h2>
                    Task 1: 
                </h2>
                <div className={`lamp ${isLampActivate}`}></div>
                <button onClick={this.turnLamp} className='btn'>
                    turn on/off
                </button>
            </div>
        );
    }
}

export default Lamp;
