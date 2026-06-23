import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!amount || !category) return;

    const newExpense = {
      id: Date.now(),
      amount,
      category,
    };

    setExpenses([...expenses, newExpense]);

    setAmount("");
    setCategory("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Personal Expenses Manager</h1>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <hr />

      <h2>Expenses</h2>

      {expenses.map((expense) => (
        <div key={expense.id}>
          ₪{expense.amount} - {expense.category}
        </div>
      ))}
    </div>
  );
}

export default App;