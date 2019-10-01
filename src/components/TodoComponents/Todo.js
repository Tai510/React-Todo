import React from 'react';

const Todo = ({id, completed, task, lineThrough}) => {
    return (
        <div className={`list ${completed}`} onClick={()=> lineThrough(id)}>
            <p>{task}</p>
        </div>
    )
}

export default Todo;