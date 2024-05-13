import React, {useState, useEffect} from 'react'
import circle from "../assets/circle-blue.png";
import { IoCheckbox } from "react-icons/io5";
import { tasks } from "./data.js";
import { Link } from 'react-router-dom';
import Graph from '../components/Graph';

const Home = () => {
  
  const [check, setCheck] = useState([1, 1, 1, 1, 0]);

    const sum = check.reduce((a,v) => a = a+v, 0);
    const percentage = (sum/check.length)*100;
    console.log(percentage);

    function update(index) {
        const newArray = [...check];

        newArray[index] = !newArray[index];
        
        setCheck(newArray);
    }


  return (
    <div className="homePage">
      
      <div className='pBar'>
        <img src={circle} className='icon-pBar'/>
        <div className='pBar-text'>
          <p className='p1-pBar'>Your Daily Goal Almost Done</p>
          <p className='p2-pBar'>{sum} out of {check.length} completed</p>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-blue-400">
            <div class="bg-white h-1 rounded-full" style={{width: `${percentage}%`}}></div>
          </div>
          <p className='percent-pBar'>{percentage}% </p>
        </div>
      </div>
      
      <div className='goals'>
      <div className='heading-goals'>
          <p>Today's Goals</p>
          <img src="https://s3-alpha-sig.figma.com/img/210a/8de5/6f295743678d95c92f172e86e2102679?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqaScr0cZULLFRy0Rhb10SJBfTyMah78dAgRkLCntQYtTPPbaXppBnjp-6pO2pcozux3hIpAs0Sz1kLhPS-7L97KnHDk0RJDph-OVM-zYJwZmBPyz5Pjb6~RVNjvuQowImy2T-T4GKCWTGaMdZcX06vOysrW6OwWEALnDO7P5NdT~ffeNF6l2Pk9wE-DlNznoDnrovqnTcWp8AFDg8NN--lbW2srl4WxwOjL2I2nGNSp03VAcRJkQuj0uoFQAY4T2qItw3wHiv2XxXT9nrxJynbWuVpocKQs06YSVYliERKCjPnBM5bia6Lh3ACdLj4rVaN8bAmlW7nIWLlKGnSmTQ__" width="36.31px" height="28px"/>
        </div>
        <div>
          <ol className='tasks-container'>
              {tasks.map((task, index) => 
                  <li className='task' key={index}>
                      <div className='iconAndTask'>
                          <img src={task?.icon} />
                          <p className='task-desc'>{task?.desc}</p>
                      </div>
                      <button
                          className='task-check'
                          onClick={() => update(index)}>
                          {check[index] ? <IoCheckbox style={{color: task?.color, width:"32px", height: "32px"}} /> : <IoCheckbox style={{width:"32px", height: "32px"}} />}
                      </button>
                  </li>
              )}
          </ol>
        </div>
      </div>
      
      <Link to="/page2" className='trackAll'>
        <div className='track-icon'>
          <p>Track</p>
        </div>
        <p className='text-trackAll'>Swipe to track all</p>
        <div className='arrows'>
          <p className='arrow1'>{`>`}</p><p className='arrow2'>{`>`}</p><p className='arrow3'>{`>`}</p>
        </div>
      </Link>
      
      <div className='Graph'>
        <Graph/>
      </div>
    </div>
  )
}

export default Home;
