import React, { useState } from 'react';
import { useEffect } from 'react';
import './styles.css';

const Incomplete = () => {
    const [tasks, setTasks] = useState([]);
    useEffect( ()=> {
        fetch('./tasks.JSON')
        .then(res => res.json())
        .then(data => setTasks(data))
    } ,[])
    return (
        <div className='background'>
            Incomplete Tasks
            {
                console.log(tasks)
            }
        </div>
    );
};

export default Incomplete;