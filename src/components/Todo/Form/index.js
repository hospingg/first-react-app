import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
        }
    }
    
    getFormInfo = (e) => {
        e.preventDefault()
        if(this.state.inputValue !== ''){
            this.props.callback(this.state.inputValue)
            this.setState({
                inputValue: ''
            })
        }
    }

    changeHandler = (e) =>{
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.getFormInfo}>
                 <input type='text' name='todo' value={this.state.inputValue} onChange={this.changeHandler} ></input>
                <button type='submit'>додати</button>
            </form>
        );
    }
}

export default Form;
