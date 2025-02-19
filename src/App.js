import React, { useState, useEffect } from 'react';
import fetchData from './services/api';
import TransactionTable from './components/TransactionTable';
import UserMonthlyRewardsTable from './components/UserMonthlyRewardsTable';
import TotalRewardsTable from './components/TotalRewardsTable';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/App.css'; 

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetchData();
        setTransactions(fetchedData.default);
      } catch (error) {
        setError('Failed to fetch data.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="App">
      <h1>Customer Rewards</h1>
      <TransactionTable transactions={transactions} />
      <UserMonthlyRewardsTable transactions={transactions} />
      <TotalRewardsTable transactions={transactions} />
    </div>
  );
};

export default App;