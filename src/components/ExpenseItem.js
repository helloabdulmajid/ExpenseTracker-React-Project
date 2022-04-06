import './ExpenseItem.css';

function ExpenseItem(props){
    const month =props.date.toLocalString('en-US',{month:'long'});
    const year =props.date.getFullYear();
    // const day=props.date.toLocalString('en-US',  day:'numeric');

    return (
<div className="expense-item">
    <div>
        <div>{month}</div>
        <div>{year}</div>
        {/* <div>{day}</div> */}
    </div>
    <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
    </div>
</div>
    );

}

export default ExpenseItem;