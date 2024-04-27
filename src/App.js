import { useState, useReducer, useRef } from "react";

// use Reducer 
//cho them mot su lua chon de su dung state cho function componet
//use state or use Reducer thang nao cung duoc
//use state dung cho kieu du lieu nguyen thuy, it phuc tap

//use reducer dung cho nhung stat phuc tap hon nhu array, obj long nhau


//use Reducer with to do app
// 1. init state 
// 2. Action 
// 3. reducer 
// 4. dispatch 

// 1. 
const initState = {
  job: "",
  jobs: []
}
// 2. 
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

//du lieu am nguoi dung mang theo di
const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}
//3. 
const reducer = (state, action) =>{
  let newState;
  switch(action.type){
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
      case ADD_JOB:
        newState = {
          ...state,
          jobs: [...state.jobs, action.payload.job]
        }
        break
        case DELETE_JOB:
          const newJobs = [...state.jobs]
          newJobs.splice(action.payload, 1)
          newState = {
            ...state,
            jobs: newJobs
          }
          break
    default:
      throw new Error(`Invalid action ${action.type}`)
  }

  return newState
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const {job, jobs} = state
  const jobIn = useRef()
  console.log(jobs)
  const handleSumbit = () => {
    dispatch(addJob({job, jobIn}))
    dispatch(setJob(""))
    jobIn.current.focus()
  }
  
  return (

      <div>
          <h1>To do</h1>
          <input 
            ref={jobIn}
            value={job}
            placeholder="Enter todo"
            onChange={e => {
              dispatch(setJob(e.target.value))
            }}
          />
          <button onClick={handleSumbit}>
            ADD
          </button>
          <ul>
            {jobs.map((c, i) => (
              <li key={i}>{c} 
                <span onClick={() => dispatch(deleteJob(i))}>&times;</span>
              </li>
            ))}
          </ul>
      </div>
  )
}


export default App;