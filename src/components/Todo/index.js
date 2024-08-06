import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import './style.css'
class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            newData: null
        }
    }

    parentCallBack = (childInfo) =>{
        this.setState({
            newData: childInfo});
    }

    taskIsAdded = () =>{
        this.setState({
            newData: null})
    }

    render() {
        return (
            <div className='to-do-container'>
                <h2>To do list</h2>
                <Form callback = {this.parentCallBack}></Form>
                <List newTask = {this.state.newData} taskConfirm = {this.taskIsAdded}></List>
            </div>
        );
    }
}

export default Todo;
