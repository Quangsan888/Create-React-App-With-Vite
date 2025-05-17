
import { element } from "prop-types";
import React,{useState} from "react"

function ToDoList(){
   
    const [tasks,setTasks] = useState(["Eat","Take shower"]);
    const [newTask,setNewTask]=useState("")

    function handleInputChange(event){
      setNewTask(event.target.value);
    }
    function addTask(){
       setTasks( tasks =>  [...tasks,newTask])
       setNewTask("")
    }
    function deleteTask(index){
    setTasks(tasks.filter((element,i) => i !== index ))
    }

    //vd thằng số 0 và tằng số 1 up swap 
    // logic như sau 
    // thằng số 1 sẽ swap lên thằng số 0 
    // thằng số 0 sẽ trám vô vị trị thằng số 1
    // nên lúc đầu updateTask[ 1, 0 ] = updatedTask[0,1]
    function moveTaskUp(index){
       if(index > 0){
        const updatedTasks= [...tasks];
        [updatedTasks[index], updatedTasks[index -1]] = 
        [updatedTasks[index -1], updatedTasks[index]]; 
        setTasks(updatedTasks);
       }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks= [...tasks];
            [updatedTasks[index], updatedTasks[index +1]] = 
            [updatedTasks[index +1], updatedTasks[index]];
            setTasks(updatedTasks);
           }
    }



 return(
    <div className="to-do-list">
       <h1>To Do list</h1>
       <div>
         <input type="text"
         placeholder="enter  a task ... "
         value={newTask}
         onChange={handleInputChange} />
         <button className="add-btn" onClick={addTask}> Add task</button>

         <ol>
            {tasks.map((element,index) =>  <li key={index}>
                                              {element} 
                                              <button className="delete-task" onClick={()=>deleteTask(index)}>Delete</button>
                                              <button className="task-up" onClick={()=>moveTaskUp(index)}>Move up</button>
                                              <button className="task-down" onClick={()=>moveTaskDown(index)}>Move down</button>
                                            </li> )}
         </ol>
       </div>
    </div>
 )

}

export default ToDoList