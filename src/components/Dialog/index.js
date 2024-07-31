import React from 'react';

const Dialog = (props) => {
    return (
        <div className='task-container'>
            <h2>
                Taks 2:
            </h2>
            <h2>
               Hello, {props.name} 
            </h2>
        </div>
    );
}

export default Dialog;
