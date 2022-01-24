import './App.css';
import { useState } from 'react';
import Task from './components/Task';
import New from './components/New';

function App() {
  
  const [tasks, setTasks] = useState(
    [
      {text: "Get Milk", taskStatus: true},
      {text: "Get Eggs", taskStatus: false}, 
      {text: "Get Bacon", taskStatus: false},
    ]
    )

    // Creating a new task
  const createTask = (newTaskObj) => {
    // Spreading the existing tasks and adding one to the end (as a task obj)
    setTasks([...tasks, newTaskObj])
  }

  const deleteTask = (deletedIdx) => {
// filter says that if "true" return it otherwise do not return it.
    const filteredTasks = tasks.filter( (task, i) => {
      if(i === deletedIdx) {
        return false;
      } else  {
        return true;
      }
    });

    setTasks(filteredTasks);
  }

  const updateTask = (idx) => {

    // Setting a new variable to a copy of the tasks array.  "..." spreads all of the elements of an array.  Essentially the following line creates a copy of the tasks array.
    const copyTasks = [...tasks];
// There is a long way and a short way of doing the following:
      // 1.
      // if(copyTasks[idx].status === true){
      //   copyBoxes[idx].status = false;
      // } else {
      //   copyBoxes[idx].status = true;
      // }
      // 2.
      copyTasks[idx].taskStatus = !copyTasks[idx].taskStatus

      setTasks(copyTasks)
  }

return (
  <div className="App">
    <h1>Tasks</h1>
    {JSON.stringify(tasks)}
    <hr />
    <New createTask={createTask}/>
    {
      tasks.map( (task, idx) => {
        return <Task 
          task={task} 
          idx={idx}  
          deleteTask={deleteTask} 
          updateTask={updateTask}
          key ={idx} />
      })
    }
  </div> 
);
}

export default App;
