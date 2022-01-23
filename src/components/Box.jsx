import React, { useState } from 'react';

const Box = (props) => {
    const { box, deleteBox, idx, updateBox, task, index } = props

    // const taskMessage = () => {
    //     if(props.submitTask) {
    //         return {setNewTask};
    //     } else { 
    //         return "";
    //     }
    // };

    return (
        <fieldset
            style={{
                backgroundColor: box.color,
                height: "100px",
                width: "100px",
                margin: "10px",
                display: "inline-block",
                textDecoration: box.checkedStatus ? "line-through" : "",
            }}>
            <br />
            {
                <div key={index}>
                    <span>{task}</span>
                </div>
            }
            <input type="checkbox" checked={box.checkedStatus} onChange={() => updateBox(idx)} />
            <button onClick={() => deleteBox(idx)}>Delete</button>
        </fieldset>
    )
}

export default Box