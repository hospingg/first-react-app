import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    // addTask = () =>{
    //     console.log('hii');
    // } 
    getParentInfo = (e) => {
        e.preventDefault()
        if(this.state.inputValue !== ''){
            this.props.callback(this.state.inputValue)
            this.state.inputValue = ''
        }
    }

    changeHandler = (e) =>{
        this.setState({
            inputValue: e.target.value
        })
    }

    

    render() {
        return (
            <form onSubmit={this.getParentInfo}>
                 <input type='text' value={this.state.inputValue} onChange={this.changeHandler} ></input>
                {/* <input type='submit'>додати</input> */}
                <button type='submit'>додати</button>
            </form>
        );
    }
}

export default Form;
