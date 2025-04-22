import React from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import ExpenseChart from './components/Chart';

function App() {
  return (
    <GlobalProvider>
      <h2>
      Expense Tracker
      </h2>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <ExpenseChart />
        <TransactionList />
        <AddTransaction />
      </div>      
    </GlobalProvider>
  );
}

export default App;
