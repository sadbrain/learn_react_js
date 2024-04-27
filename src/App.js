import { useState, useReducer } from "react";

// use Reducer 
//cho them mot su lua chon de su dung state cho function componet
//use state or use Reducer thang nao cung duoc
//use state dung cho kieu du lieu nguyen thuy, it phuc tap

//use reducer dung cho nhung stat phuc tap hon nhu array, obj long nhau


//use Reducer
// 1. init state 
// 2. Action 
// 3. reducer 
// 4. dispatch 
// 1. 
const initState = 0;
// 2. 
const UP_ACTION = "up";
const DOWN_ACTION = "down";
//3.
const reducer = (state, action) =>{
  switch(action){
      case UP_ACTION:
        return state + 1
      case DOWN_ACTION:
        return state - 1
      default:
        throw new Error("Invalid action")
  }
}

// 4. 
const App = () => {
  //lan dau reducer chua goi voi, nhan gia tri khoi tao va return lai mot mang
  //setCount day la dispatch thagn nay viet dung action nao se duoc thuc thi
  const [count, dispatch] = useReducer(reducer, initState)
  return (

      <div>
          <h1>{count}</h1>
          <button onClick = {() => dispatch(DOWN_ACTION)}>
            Down
          </button>
          <button onClick = {() => dispatch(UP_ACTION)}>
            Up
          </button>
      </div>
  )
}


export default App;