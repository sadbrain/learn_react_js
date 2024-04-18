import {useState} from "react";
//How to use useState
// const Component = () => {
//   //initState gia tri khoi tao chi dung mot lan de khoi tao gia tri dau
//   //first state = initState
//   //setState => function to set state => state se la gia tri cua giu lieu
//   const [state, setState] = useState(initState);
// }

//bai tap tang so 
function App() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
        setCounter(counter + 1);
  }
  return (
    <div className="App">
        <h1>
          {counter}
        </h1>
        <button onClick={handleIncrease} style={{padding:20, borderRadius:20, fontSize: 30}}>
           increase
        </button>
    </div>
  )
  //khi click on button call App function again

  //click 1 lan se tang lenb ba lan ma khong phai + 3 => useState with callback
//   const handleIncrease = () => {
//     setCounter(preState => preState+1);
//     setCounter(preState => preState+1);
//     setCounter(preState => preState+1);
// }
// initState with call back 

}
const orders = [100 ,200, 300];

export default App;
