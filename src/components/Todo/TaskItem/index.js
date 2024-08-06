import React from 'react';
import './style.css'

const TaskItem = (props) => {
    function deleteItem() {
        props.deleteTask(props.content.id);
    }
    
    return (
            <li className='task-item'>
                <p>{props.content.name}</p> 
                <i onClick={deleteItem} className="fa-solid fa-trash trash-icon"></i>
            </li>
            
           
    );
    
}

export default TaskItem;
