import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 15, category: "Utilities" },
    { id: 3, description: "ccc", amount: 5, category: "Utilities" },
  ]);

  return (
    <div className="app">
      <div className="header">Expense Tracker</div>
      <Form />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
