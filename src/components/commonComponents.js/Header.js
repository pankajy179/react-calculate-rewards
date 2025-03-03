import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../../styles/App.css';

const Header = ({ value, onChange }) => {

    return (
        <div className='header'>
            <Tabs
                value={value}
                onChange={onChange}
                aria-label="tab"
                className='tab'
                variant="fullWidth"
                textColor=''
                
            >
                <Tab label="Transactions" />
                <Tab label="Monthly Rewards" />
                <Tab label="Total Rewards" />
            </Tabs >
        </div>
    );
};

export default Header;