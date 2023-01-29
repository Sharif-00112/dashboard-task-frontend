import React from 'react';

const Task = (props) => {
    const {clientName, clientImg, supervisorName, supervisorImg, taskSummary, progress, staff1Img, staff2Img, modules, message, attachment, date} = props.task;
    return (
        <div>
            <div className="">
                <p>{clientName}</p>
                <p>{supervisorName}</p>
            </div>
            <div className="">
                <small>{taskSummary}</small>
                <p>{progress}</p>
            </div>
            <div className="">
                <p>{modules}</p>
                <p>{message}</p>
                <p>{attachment}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Task;