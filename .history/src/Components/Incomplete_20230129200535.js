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
        <div className='background pt-4'>
            <div className="task-title">
                <h5>Incomplete</h5>
                <p className='background p-3 rounded'>0</p>
            </div>
            <div style={{overflowY:"scroll"}} className="section-container">
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