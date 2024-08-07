import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import '../style.css'

class List extends Component {
    constructor(props){
        super(props)
        this.state ={
            taskList: [],
        }
        this.idCounter = 0
    }
    isEmpty = () => this.state.taskList.length === 0

    addTask = (newTask) => {
        if(newTask!== null){
            const taskItem = {name: newTask, id: this.idCounter++, isActive: true}
            this.setState({
                taskList: [...this.state.taskList, taskItem]
            })
        }
    }
    componentDidUpdate() {;
        if (this.props.newTask !== null) {
            this.addTask(this.props.newTask);
            this.props.taskConfirm()
        }
    }
    deleteTask = (id) =>{
        const newTaskList = this.state.taskList.filter(task => task.id !== id )
        this.setState({
            taskList: newTaskList
        });
    }
    changeTaskActivity = (check, id) => {
        const changedTaskList = this.state.taskList.map(task => {
            if(task.id === id){
                task.isActive = !check
            }
            return task
        }) ;
        this.setState({
            taskList: changedTaskList
        })
    }

    mapTasks = () => this.state.taskList.map((task) => (<TaskItem content={task} deleteTask={this.deleteTask} key={task.id} changeActivity = {this.changeTaskActivity} ></TaskItem>))
    
    render() {
        const isEmpty = this.isEmpty()
        return (
            <>
                {isEmpty ? (
                    <p>The list is empty</p>) 
                    : (<ul className='list-container'>
                        {this.mapTasks()}
                    </ul>)}
            </>
        );
    }
}

export default List;
