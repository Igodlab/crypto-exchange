import React from 'react';
import './App-css';
import Coin from './components/Coin/Coin';

function App() {
    return (
        <div classNAme="App">
            <header classNAme="App-header">
                <h1>Learn React bitch</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <Coin name="Cardano" ticker="ADA" price="$1000" />
                    <Coin name="Bitcoin" ticker="BTC" price="$300000" />
                </tbody>	
            </table>
        </div>
    );
}

export default App;
