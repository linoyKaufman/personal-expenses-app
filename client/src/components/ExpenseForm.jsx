function ExpenseForm({ amount, category, setAmount, setCategory, addExpense }) {
  return (
    <div>
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

      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;