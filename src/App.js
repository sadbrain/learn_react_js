import Content from "./Content"
import { useState, useMemo, useCallback, useRef } from "react";
// mome trang prop of a component render lai khong can thiet 
//useMemo thi tranh lap lai logic khong can thiet

const App = () => {
  const [products, setProducts] = useState([])
  const [price, setPrice] = useState("")
  const [name, setName] = useState("")
  const nameInRef = useRef()
  const handleSumbit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])

    setName("")
    setPrice("")

    nameInRef.current.focus()
  }
  // const total = reduce no se bi tinh lai mot cach khong can thiet 
  // => useMemo 
  const total = useMemo(() => {
    console.log("Tinh toan lai")
    const result = products.reduce((result, prod) => {
        return result + prod.price
    }, 0)

    return result
  }, [products]) //=> giong voi denpen of useEffect
  console.log(products)
  return (

      <div>
          <input
            ref={nameInRef}
            value={name}
            placeholder="Enter name..."
            onChange={e => setName(e.target.value)}
          />
            <input
            value={price}
            placeholder="Enter price..."
            onChange={e => setPrice(e.target.value)}
          />
          <button onClick={handleSumbit}>sumbit</button>
        Total: {total}
        <ul>
          {products.map((p, i) => {
            <li key={i}>{p.name} - {p.price}</li>
          })}
        </ul>
      </div>
  )
}


export default App;