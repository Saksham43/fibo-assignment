import React, {useState} from 'react'
import { tasks } from '../utils/data';
import { IoCheckbox } from "react-icons/io5";
import Home from '../pages/Home';

const TodoList = (props) => {

    const [check, setCheck] = useState([1, 1, 1, 1, 0]);

    const sum = check.reduce((a,v) => a = a+v, 0);
    const percentage = (sum/check.length)*100;
    console.log(percentage);

    function update(index) {
        const newArray = [...check];

        newArray[index] = !newArray[index];
        
        setCheck(newArray);
    }
    // const [tasks, setTasks] = useState(["Workout for 20 mins", "Read book for 15 mins", "30 mins walk", "Sleep at 11 sharp", "Drink 3L water"]);
    // const [newTask, setNewTask] = useState("");
    // const [check, setCheck] = useState(false);

    // function handleInputChange(event){
    //     setNewTask(event.target.value);
    // }

    // function addTask(){

    //     if(newTask.trim() !== ""){
    //         setTasks(t => [...tasks, newTask]);
    //         setNewTask("");
    //     }
        
    // }

    

    return (
    <div>
        
        {/* <div>
            <input
                type='text'
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className='add-button'
                onClick={addTask}
            >
                Add
            </button>
        </div> */}
    </div>
  )
}

export default TodoList;
