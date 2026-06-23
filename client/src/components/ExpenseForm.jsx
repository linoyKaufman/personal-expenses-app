function ExpenseForm({
  amount,
  category,
  setAmount,
  setCategory,
  addExpense,
}) {
  return (
    <div className="form">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
      </select>

      <button onClick={addExpense}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;