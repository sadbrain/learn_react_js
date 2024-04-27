import Content from "./Content"
import { useState, Memo } from "react";
// Use Memo
//1. memo() => higher order component  (HOC)
// 2. useCallback 

// Hooks => moc vao gan vao => use in function component
// HOC => grap component
// Render props 
// ====> extends login agian 

// memo ghi nho lai cac prop cua a component de quyet dinh co render lai component do khong 
//toi uu hieu nang
const App = () => {
  const [count, setCount] = useState(60)
  const increase = () => {
      setCount(prev => prev + 1)
  }
  return (
      <div>
        <Content/>
        {/* content bi render lai mat du khong can thiet vay ta phai lam the nao 
          use memo cho contenct qua content component
         */}
          {
              count
          }
          <button onClick={increase}>Increase</button>
      </div>
  )
}


export default App;