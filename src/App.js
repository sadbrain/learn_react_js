import {useState} from "react";

const App = () => {
  const [jobs, setJobs] = useState(() => {
    return localStorage.getItem("job") 
           ? JSON.parse(localStorage.getItem("job"))
          : []
  })
  const [job, setJob] = useState("")

  const handleSumbit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      //save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("job", jsonJobs);

      return newJobs
    })
    setJob("")
  }
  return (
    <div style={{padding:32}}>
        <input
          value={job}
          onChange = {(e) => setJob(e.target.value)}
        />
        <button onClick={handleSumbit}>Add</button>

        <ul>
          {
            jobs.map((j, i) => (
              <li key={i}>{j}</li>
            ))
          }
        </ul>
    </div>
  )
}


export default App;
