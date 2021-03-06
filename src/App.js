import Expenses from "./components/Expenses/Expenses";
import React from "react";

const App=()=> {
  let expenses = [
    {
      id:'e0',
      title:'Home Rent',
      amount:250,
      date:new Date(2022,12,3)
    },
    {
      id:'e1',
      title:"Electric Bill",
      amount:355,
      date:new Date(2022,2,7)
    },
    {
      id:'e2',
      title:"Petrol",
      amount:114,
      date:new Date(2022,5,5)
    },
    {
      id:'e3',
      title:"Books",
      amount:700,
      date:new Date(2022,7,1)
    },
    {
      id:'e4',
      title:"Movie",
      amount:500,
      date:new Date(2022,5,21)
    }
  ]
 
  return (
    <div>
      <h3>Let's get Started</h3>
      <Expenses item={expenses}/>
    </div>
  );
}
export default App;
