import React from 'react';
import Incomplete from './Incomplete';
import ToDo from './ToDo';

const Dashboard = () => {
    return (
        <div className='dashboard landing'  style={{overflowX:"scroll"}} >
            <Incomplete></Incomplete>
            <ToDo></ToDo>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
        </div>
    );
};

export default Dashboard;