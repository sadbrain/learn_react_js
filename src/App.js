import { useRef } from "react"
import { useStore, actions } from "./store"
const App = () => {
  const [state, dispatch] = useStore()
  console.log(state)
  const refIn = useRef()
  const handleSumbit = () => {
    dispatch(actions.addTodoInput(state.todoInput))
    dispatch(actions.setTodoInput(""))
    refIn.current.focus()
  }
  return (
      <div>
        <input
          ref={refIn}
          value={state.todoInput}
          placeholder="Enter todo..."
          onChange={e => dispatch(actions.setTodoInput(e.target.value))}
        />
        <button onClick={handleSumbit}>Add</button>
          {state.todos.map((t,i) => (
            <li key={i}>{t}</li>
           ))}
     </div>
      

  )
}


export default App;