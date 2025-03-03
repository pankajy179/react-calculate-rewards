import React from 'react';
import ErrorBoundary from './components/commonComponents.js/ErrorBoundary';
import Homepage from './components/homepage/Homepage';
import './styles/App.css';

const App = () => {
  
  return (
    <ErrorBoundary className="App">
      <Homepage/>
    </ErrorBoundary>
  );
};

export default App;