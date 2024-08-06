import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import '../style.css'

class List extends Component {
    constructor(props){
        super(props)
        this.state ={
            taskList: [],
            lenght: 0
        }
    }
    isEmpty = () => this.state.taskList.length === 0

    addTask = (newTask) => {
        if(newTask!== null){
            const taskItem = {name: newTask, id: this.state.lenght++}
            this.setState({
                taskList: [...this.state.taskList, taskItem]
            })
        }
    }
    componentDidUpdate(prevProps) {
        // console.log(this.state.taskList);
        if (this.props.newTask !== prevProps.newTask 
            //  && !this.state.taskList.includes(this.props.newTask)
            ) {
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
    mapTasks = () => this.state.taskList.map((task) => (<TaskItem content={task} deleteTask={this.deleteTask} key={task.id}></TaskItem>))
    
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
