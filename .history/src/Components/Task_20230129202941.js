import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const stack = <FontAwesomeIcon icon="fa-solid fa-layer-group" />

const Task = (props) => {
    const {clientName, clientImg, supervisorName, supervisorImg, taskSummary, progress, staff1Img, staff2Img, modules, message, attachment, date} = props.task;
    return (
        <div className='task'>
            <div className="task-part">
                <p>{clientName}</p>
                <p>{supervisorName}</p>
            </div>
            <div className="task-part">
                stack
                <small>{taskSummary.substring(0,30)}</small>
                <p className='background px-2 py-1 rounded'>{progress}</p>
            </div>
            <div className="task-part">
                <p className='background p-1 rounded'>{modules}+</p>
                <p>{message}</p>
                <p>{attachment}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Task;