import React from 'react';
import Incomplete from './Incomplete';

const Dashboard = () => {
    return (
        <div className='dashboard landing'  style={{overflowX:"scroll"}} >
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