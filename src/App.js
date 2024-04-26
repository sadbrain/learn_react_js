import Content from "./Content"
import { useEffect , useState} from "react";

//necessary knowledge 
//events: Add/ remove event listener
//observer pattern: Subscribe/ Unsubscribe
//Closure
//timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted/ Unmounted 
// ====
//Call API


//
// 1. Update DOM
// 2. call API 
// 3. listen DOM envets
    // - scroll 
    // - resize
// 4. clean up 
    // - remove listener/ unsubcribe 
    // - clear timer
const App = () => {
  // 1. useEffect(callback)
    // - call callback every time the component re-render
    // - call callback after component is added to DOM
  // 1.3 code in callback 
  // 2. useEffect(callback, [])
    // - only call callback after component is mounted
    // => when component re-render, callback will not be called
  // 3. useEffect(callback, [deps])

  //--------, general theory
  //callback is always called after component is mounted
  // 1. 
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  useEffect(() => {
    console.log("re-render")
    document.title = title
  })
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => res.json())
  //   .then(posts => {
  //     setPosts(posts);
  //   })
  // }, [])
  return (
    <div style={{padding: 30}}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
       {/* <ul>
          {posts.map((p, i) => (
            <li key={i}>{p.id + " " +p.title}</li>
          ))}     
       </ul>         */}
    </div>
  )
}


export default App;