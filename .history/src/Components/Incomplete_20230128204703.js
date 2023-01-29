import React, { useState } from 'react';
import { useEffect } from 'react';
import './styles.css';
import Task from './Task';

const Incomplete = () => {
    const [tasks, setTasks] = useState([]);
    useEffect( ()=> {
        fetch('./tasks.JSON')
        .then(res => res.json())
        .then(data => setTasks(data))
    } ,[])
    return (
        <div className='background'>
            <div className="task-title">
                <h5>Incomplete</h5>
                <p>0</p>
            </div>
            <div className="section-container scrolling-y">
                <div className="task-container">
                    {
                        tasks.map(task => <Task
                            key={task.taskNo}
                            task={task}
                        ></Task>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Incomplete;