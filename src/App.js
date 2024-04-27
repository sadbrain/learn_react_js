import Content from "./Content"
import { useState, Memo, useCallback } from "react";
// Use Memo
//1. memo() => higher order component  (HOC)
// 2. useCallback => tranh tao ra cac ham moi khong can thiet trong function component
  // - Reference type
  // - React memo()

const App = () => {
  const [count, setCount] = useState(60)
  const handleIncrease = useCallback(() => {
      setCount(prev => prev + 1)
  }, [])
  return (

    // xu ly logic bat dau bang handle 
    //cho logic xay ra bat dau bang on
    //example: handleIncrease onIncrease
    //bo cai nut qua Content Component thi no van se bi re-render
    //vi mot khi App component render lai no se tao ra mot ham moi la handleIncrease
    //nen khi gan lai cho Content component thi thang memo se thay hai thang nay khong bang nhau do no van luu cai ham cu
    //suy ra thi lam sao cho ham ma memo ghi nho va ham duoc tao ra trong App component phai cung tham chieu toi mot ham
    // => useCallback 
      <div>
        <Content onIncrease={handleIncrease}/>
        {/* content bi render lai mat du khong can thiet vay ta phai lam the nao 
          use memo cho contenct qua content component
         */}
          {
              count
          }
      </div>
  )
}


export default App;