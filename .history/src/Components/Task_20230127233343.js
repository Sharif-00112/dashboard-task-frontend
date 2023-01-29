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

            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Task;