function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.map((expense) => (
        <div className="expense-item" key={expense.id}>
          ₪{expense.amount} - {expense.category}

          <button onClick={() => deleteExpense(expense.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;