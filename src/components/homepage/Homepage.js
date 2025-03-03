import React, { useState, useEffect } from 'react';
import fetchData from '../../services/api';
import TransactionTable from '../../components/screens/TransactionTable';
import UserMonthlyRewardsTable from '../../components/screens/UserMonthlyRewardsTable';
import TotalRewardsTable from '../../components/screens/TotalRewardsTable';
import LoadingSpinner from '../../components/commonComponents.js/LoadingSpinner';
import '../../styles/App.css';
import Header from '../commonComponents.js/Header';

const Homepage = () => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tab, setTab] = useState(0);

    useEffect(() => {
        const fetchDataAsync = async () => {
            setIsLoading(true);
            fetchData()
                .then(response => {
                    console.log("fetchData", response);
                    setTransactions(response.transactions)
                })
                .catch(error => {
                    setError(error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        };
        fetchDataAsync();
    }, []);

    const handleTabChange = (event, newTabValue) => {
        setTab(newTabValue)
    }

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>Error: {error}</p>;

    const renderTab = () => {
        if (tab == 0) return <TransactionTable transactions={transactions} />
        if (tab == 1) return <UserMonthlyRewardsTable transactions={transactions} />
        if (tab == 2) return <TotalRewardsTable transactions={transactions} />
    }

    return (
        <>
            <Header value={tab} onChange={handleTabChange} />
            <div className='container'>
                {renderTab()}
            </div>
        </>
    );
};

export default Homepage;