function DashboardCards({ totalExpenses, expenses }) {
  const expenseCount = expenses.length;

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + Number(expense.amount);

    return acc;
  }, {});

  const topCategory =
    Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "No expenses yet";

  return (
    <div className="dashboard-cards">
      <div className="dashboard-card">
        <span>Total</span>
        <strong>₪{totalExpenses}</strong>
      </div>

      <div className="dashboard-card">
        <span>Expenses</span>
        <strong>{expenseCount}</strong>
      </div>

      <div className="dashboard-card">
        <span>Top Category</span>
        <strong>{topCategory}</strong>
      </div>
    </div>
  );
}

export default DashboardCards;