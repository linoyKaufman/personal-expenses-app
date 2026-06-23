import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import MonthlyChart from "./components/MonthlyChart";
import DashboardCards from "./components/DashboardCards";
import CategoryPieChart from "./components/CategoryPieChart";

function App() {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const [monthlyExpenses, setMonthlyExpenses] = useState(() => {
    const saved = localStorage.getItem("monthlyExpenses");
    return saved ? JSON.parse(saved) : {};
  });

  const expenses = monthlyExpenses[selectedMonth] || [];

  useEffect(() => {
    localStorage.setItem(
      "monthlyExpenses",
      JSON.stringify(monthlyExpenses)
    );
  }, [monthlyExpenses]);

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );
const formatMonth = (month) => {
  const [year, monthNumber] = month.split("-");

  return new Date(year, monthNumber - 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const monthlySummary = Object.entries(monthlyExpenses).map(
  ([month, expenses]) => {
    const total = expenses.reduce(
      (sum, expense) => sum + Number(expense.amount),
      0
    );

    return {
      month,
      total,
    };
  }
);
  const addExpense = () => {
    if (!amount || !category) return;

    const newExpense = {
      id: Date.now(),
      amount,
      category,
    };

    setMonthlyExpenses({
      ...monthlyExpenses,
      [selectedMonth]: [...expenses, newExpense],
    });

    setAmount("");
    setCategory("");
  };

  const deleteExpense = (id) => {
    setMonthlyExpenses({
      ...monthlyExpenses,
      [selectedMonth]: expenses.filter((expense) => expense.id !== id),
    });
  };

  return (
    <div className="app">
      <div className="card header">
        <h1>Personal Expenses Manager</h1>
        <p>Track your monthly spending</p>

        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        />

        <div className="total">₪{totalExpenses}</div>
      </div>
      <div className="card">
  <DashboardCards
    totalExpenses={totalExpenses}
    expenses={expenses}
  />
</div>
      <div className="card">
        <ExpenseForm
          amount={amount}
          category={category}
          setAmount={setAmount}
          setCategory={setCategory}
          addExpense={addExpense}
        />
      </div>

      <div className="card">
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
        />
      </div>
            <div className="card">
  <h2>Monthly Chart</h2>
  <MonthlyChart monthlySummary={monthlySummary} />
</div>
<div className="card">
  <h2>Expenses By Category</h2>

  <CategoryPieChart
    expenses={expenses}
  />
</div>
      <div className="card">
  <h2>Monthly History</h2>
  {monthlySummary.map((item) => (
    <div className="expense-item" key={item.month}>
      <div className="expense-info">
        <span className="amount">{formatMonth(item.month)}</span>
        <span className="category">Total monthly expenses</span>
      </div>
 

      <strong>₪{item.total}</strong>
    </div>
  ))}
</div>
    </div>
  );
}

export default App;