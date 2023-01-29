import React from 'react';
import Incomplete from './Incomplete';

const Dashboard = () => {
    return (
        <div style={{overflowY:"scroll"}} className='dashboard'>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
        </div>
    );
};

export default Dashboard;