import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const startEditingHandler = () => {
    setEditing(true);
  }
  const cancelEditingHandler = () => {
    setEditing(false);
  }

  return (
      <div>
        <div className='new-expense'>
          {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
          {isEditing && <ExpenseForm cancelEdit={cancelEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
      </div>
  );
};

export default NewExpense;
