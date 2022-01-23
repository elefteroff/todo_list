import React, { useState } from 'react';

const New = (props) => {

    const [newColor, setNewColor] = useState("")

    const submitColor = (e) => {
        e.preventDefault();
        props.createBox({color: newColor, status: false});

        const myNewBox = {
            color: newColor,
            status: false
        }
    }

    const submitTask = (e) => {
        e.preventDefault();
        // setNewTask({newTask: newTask});
        props.newTaskItem(props.setNewTask);
    }

    return (
        <fieldset>
            <legend>New.jsx</legend>
            {/* newTask: {newTask} */}
            props.newTask: {props.newTask}
            <form onSubmit={submitTask}>
                <input type="text" onChange={(e) => props.setNewTask(e.target.value)} value={props.newTask}/>
                <button>Add</button>
            </form>

            newColor: {newColor}

            <form onSubmit={submitColor}>
                <input type="color" onChange={(e) => setNewColor(e.target.value)} value={newColor}/>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default New