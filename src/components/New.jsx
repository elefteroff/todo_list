import React, { useState } from 'react';

const New = (props) => {

    const [newColor, setNewColor] = useState("")

    const submitColor = (e) => {
        e.preventDefault();
        props.createBox({color: newColor});
    }

        const myNewBox = {
            color: newColor
        }

    return (
        <fieldset>
            <legend>New.jsx</legend>
            newColor: {newColor}
            <form onSubmit={submitColor}>
                <input type="color" onChange={e => setNewColor(e.target.value)} value={newColor}/>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default New