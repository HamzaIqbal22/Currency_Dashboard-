import React from 'react';
import Table from './components/Table';
import Chart from './components/Chart';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Currency Exchange Rates Dashboard</h1>
            <Chart />
            <Table />
            <div className="dynamic-background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default App;