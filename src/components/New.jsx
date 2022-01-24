import React, { useState } from 'react';

const New = (props) => {
    const { createTask } = props

    const [newTaskText, setNewTaskText] = useState("")

    const submitTask = (e) => {
        e.preventDefault();

        // Create the task object
        const newTaskObj = {
            text: newTaskText, taskStatus: false
        }
        createTask(newTaskObj);
    }

    return (
        <p>
            Create New Task
            <form onSubmit={submitTask}>
                <input type="text" onChange={(e) => setNewTaskText(e.target.value)} value={newTaskText}/>
                <button>Add</button>
            </form>
            {JSON.stringify(newTaskText)}
        </p>
        
    )
}

export default New