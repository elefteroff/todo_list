import React, { useState } from 'react';

const Task = (props) => {
    const { task, deleteTask, idx, updateTask, index } = props

    return (
        <p
            style={{
                textDecoration: task.taskStatus ? "line-through" : "",
            }}>
            <br />
            {
                <span>{task.text}</span>
            }
            <input type="checkbox" checked={task.taskStatus} onChange={() => updateTask(idx)} />
            <button onClick={() => deleteTask(idx)}>Delete</button>
        </p>
    )
}

export default Task