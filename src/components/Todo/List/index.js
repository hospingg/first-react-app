import TaskItem from '../TaskItem';
import '../style.css'

import React from 'react';

const List = (props) => {
    const mapTasks = () => props.taskList.map((task) => (<TaskItem content={task} 
        deleteTask={props.deleteTask} 
        key={task.id} 
        changeActivity = {props.changeActivity} 
        ></TaskItem>
    ))
    return (
        <>
            {props.isEmpty ? (
                <p>The list is empty</p>) : ( <>
                    <ul className='list-container'>
                        {mapTasks()}
                    </ul> 
                    {props.isAllDone ? <p>All tasks are completed</p> : null}
                    </> )}
        </>
    );
    
}

export default List;
