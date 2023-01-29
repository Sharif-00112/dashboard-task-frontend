import React from 'react';

const Task = (props) => {
    const {clientName} = props.task;
    return (
        <div>
            {clientName}
        </div>
    );
};

export default Task;