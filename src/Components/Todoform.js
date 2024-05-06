import React,{useState} from 'react'
import './Todoform.css'


export const Todoform = () => {
  const [task,setTask] =useState('');
  const [tasks,setTasks] =useState([]);

  const handleInputChange =(event) => {
    setTask(event.target.value);
  }

  const handleAddTask =() => {
    if(task.trim() !== ''){
      setTasks([...tasks,task]);
      setTask('');
    }
  }

  const handleDeleteTask =(index) => {
    const newTasks =[...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }


  return (
    <>
    <div className='todotitle'>MY ACTIVITY
    <div>
     <form className='input_text'>
        <input type="text" className='Todoinput' placeholder='what is todays target ?' value={task} onChange={handleInputChange}/>
    </form>

    <button type="button"className='todo-btn' onClick={handleAddTask} >Add Task</button>

    </div>
    <div>
      {
        tasks.map((task,index) => (
          <div key ={index} className="task">
            <span>{task}</span>
            <button type="button"className='del-btn' onClick={() => handleDeleteTask(index) }>Delete</button>
          </div>
        ))
      }
    </div>
    </div>
    
    </>
  )
}
