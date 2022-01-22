import './App.css';
import { useState } from 'react';
import Box from './components/Box';
import New from './components/New';

function App() {

    const [boxes, setBoxes] = useState(
      [
        {color: "red"},
        {color: "green"},
        {color: "blue"},
      ]
      )

    const createBox = (newBoxObj) => {
      setBoxes([...boxes, newBoxObj])
    }

    const deleteBox = (deletedIdx) => {

      const filteredBoxes = boxes.filter( (box, i) => {
        if(i === deletedIdx) {
          return false;
        } else  {
          return true;
        }
      });

      setBoxes(filteredBoxes);
    }

  return (
    <div className="App">
      <h1>Boxes</h1>
      {JSON.stringify(boxes)}
      <hr />
      <New createBox={createBox}/>
      {
        boxes.map( (box, idx, deletedIdx) => {
          return <Box box={box} idx={idx} index={deletedIdx} deleteBox={deleteBox}/>
        })
      }
    </div> 
  );
}

export default App;
