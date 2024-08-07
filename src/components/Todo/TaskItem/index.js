import './style.css'


const TaskItem = (props) => {
    function deleteItem() {
        props.deleteTask(props.content.id);
    }
    function changeTasksActivity(e){
        props.changeActivity(e.target.checked, props.content.id)
    }
    
    return (
            <li className='task-item'>
                <input onChange={changeTasksActivity} type="checkbox"></input>
                <p className={props.content.isActive ? null : 'task-is-done'}> {props.content.name}</p> 
                <i onClick={deleteItem} className="fa-solid fa-trash trash-icon"></i>
            </li>
    );
}

export default TaskItem;
