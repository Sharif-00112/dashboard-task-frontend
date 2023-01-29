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
            <div className="">
                <h5>Incomplete</h5>
                <p>0</p>
            </div>
            <div className=""></div>
        </div>
    );
};

export default Incomplete;