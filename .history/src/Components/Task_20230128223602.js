import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.css';

const Task = (props) => {
    const {clientName, clientImg, supervisorName, supervisorImg, taskSummary, progress, staff1Img, staff2Img, modules, message, attachment, date} = props.task;
    return (
        <div className='task'>
            <div className="task-part">
            <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                <p>{clientName}</p>
                <p>{supervisorName}</p>
            </div>
            <div className="task-part">
                <small> {taskSummary.substring(0,30)}</small>
                <p>{progress}</p>
            </div>
            <div className="task-part">
                <p>{modules}</p>
                <p>{message}</p>
                <p>{attachment}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Task;