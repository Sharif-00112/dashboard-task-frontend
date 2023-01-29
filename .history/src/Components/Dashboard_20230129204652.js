import React from 'react';
import Incomplete from './Incomplete';
import ToDo from './ToDo';
import Doing from './Doing'
import UnderReview from './UnderReview'
import Completed from './Completed'
import Overdue from './Overdue'

const Dashboard = () => {
    return (
        <div className='dashboard landing'  style={{overflowX:"scroll"}} >
            <Incomplete></Incomplete>
            <ToDo></ToDo>
            <Doing></Doing>
            <UnderReview></UnderReview>
            <Completed></Completed>
            <Overdue></Overdue>
        </div>
    );
};

export default Dashboard;