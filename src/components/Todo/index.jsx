import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import TaskItem from "./TaskItem";
import "./style.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.idCounter = 0;
  }

  isEmpty = () => this.state.taskList.length === 0;

  isAllTasksDone = () =>
    this.state.taskList.every((task) => task.isActive === false);

  addTask = (newTask) => {
    if (newTask !== null) {
      const taskItem = { name: newTask, id: this.idCounter++, isActive: true };
      this.setState({
        taskList: [...this.state.taskList, taskItem],
      });
    }
  };

  parentCallBack = (childInfo) => {
    this.addTask(childInfo);
  };

  deleteTask = (id) => {
    const newTaskList = this.state.taskList.filter((task) => task.id !== id);
    this.setState({
      taskList: newTaskList,
    });
  };

  changeTaskActivity = (check, id) => {
    const changedTaskList = this.state.taskList.map((task) => {
      if (task.id === id) {
        task.isActive = !check;
      }
      return task;
    });
    this.setState({
      taskList: changedTaskList,
    });
  };
  // listRender = () => {
  //   return (
      
  //   );
  // };

  render() {
    return (
      <div className="to-do-container">
        <h2>To do list</h2>
        <Form callback={this.parentCallBack}></Form>
        {
      <List
        isEmpty={this.isEmpty()}
        isAllDone={this.isAllTasksDone()}
        children = {
          this.state.taskList.map((task) => (
            <TaskItem
                content={task}
                deleteTask={this.deleteTask}
                key={task.id}
                changeActivity={this.changeTaskActivity}>
              </TaskItem>
          ))}>
      </List>}
      </div>
    );
  }
}

export default Todo;
