import Content from "./Content"
import { useState } from "react";
//mounted dua mot component vao de su dung
//unmounted: remove a componet from other component

//example to: 
//step 1 create Content component
const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{padding: 30}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}       
    </div>
  )
}


export default App;
