import React from 'react';

const Box = (props) => {
    const {box, deleteBox, index} = props
    return (
        <div style={{
            backgroundColor: box.color,
            height: "100px",
            width: "100px",
            margin: "10px",
            display: "inline-block",
        }}>
            {box.color} <br/>
            <button onClick = {() => deleteBox(index)}>Delete</button>
        </div>
    )
}

export default Box