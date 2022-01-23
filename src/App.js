import './App.css';
import { useState } from 'react';
import Box from './components/Box';
import New from './components/New';

function App() {
  
  const [boxes, setBoxes] = useState(
    [
      {color: "red", taskStatus: false, checkedStatus: false},
      {color: "green", taskStatus: true, checkedStatus: false}, 
      {color: "blue", taskStatus: false, checkedStatus: false},
    ]
    )
  // const [tasks, setTasks] = useState(
  //   [
  //     {status: true},
  //   ]
  // )
  
  const createBox = (newBoxObj) => {
    setBoxes([...boxes, newBoxObj])
  }

  // const createTask = (newTaskObj) => {
  //   setTasks([tasks, newTaskObj])
  // }

  const deleteBox = (deletedIdx) => {
// filter says that if "true" return it otherwise do not return it.
    const filteredBoxes = boxes.filter( (box, i) => {
      if(i === deletedIdx) {
        return false;
      } else  {
        return true;
      }
    });

    setBoxes(filteredBoxes);
  }

  // const newTask = (newTaskObj) => {
  //   setBoxes([...boxes, newTaskObj])
  // }
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])
  const newTaskItem = (tasks) => {
    setTasks(tasks);
  }

  const updateBox = (idx) => {

    const checkBoxes = [...boxes];
// There is a long way and a short way of doing the following:
      // 1.
      // if(copyBoxes[idx].status === true){
      //   copyBoxes[idx].status = false;
      // } else {
      //   copyBoxes[idx].status = true;
      // }
      // 2.
      checkBoxes[idx].checkedStatus = !checkBoxes[idx].checkedStatus
      // copyBoxes[idx].taskStatus = !copyBoxes[idx].taskStatus
      // if(checkBoxes[idx].taskStatus === true){
      //   //   return ;
      //   }

      setBoxes(checkBoxes)
  }

return (
  <div className="App">
    <h1>Boxes</h1>
    {JSON.stringify(boxes)}
    <hr />
    <New createBox={createBox} newTaskItem={newTaskItem}/>
    {
      boxes.map( (box, idx, deletedIdx, updateBox) => {
        return <Box 
          box={box} 
          idx={idx} 
          index={deletedIdx} 
          deleteBox={deleteBox} 
          updateBox={updateBox} />
      })
    }

    {
      tasks.map( (task, index) => {
        return <Box
          task={task}
          index={index} />
        })
      } 
  </div> 
);
}


export default App;
