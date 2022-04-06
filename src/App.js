import ExpenseItem from "./components/ExpenseItem";
function App() {
  let expenseDate = new Date(2022, 3, 30);
  let expenseTitle = "School Fees";
  let expenseAmount = 400;
  return (
    <div>
      <h3>Let's get Started</h3>
      <ExpenseItem
        date={expenseDate}
        title={expenseTitle}
        amount={expenseAmount}>
      </ExpenseItem>
    </div>
  );
}
export default App;
