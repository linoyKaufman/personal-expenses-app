import Select from "react-select";

function ExpenseForm({
  amount,
  category,
  setAmount,
  setCategory,
  addExpense,
}) {
  const options = [
    { value: "Food", label: "Food" },
    { value: "Shopping", label: "Shopping" },
    { value: "Transportation", label: "Transportation" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Bills", label: "Bills" },
  ];

  return (
    <div className="form">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

    <Select
  options={options}
  placeholder="Select Category"
  menuPortalTarget={document.body}
  styles={{
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  }}
  value={options.find((option) => option.value === category) || null}
  onChange={(selectedOption) => setCategory(selectedOption.value)}
/>

      <button onClick={addExpense}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;