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


//        call api with dependencies
const tabs = ["posts", "comments", "albums"]
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
  // 1. --call back duoc goi lai dependencies bi thay doi
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/${type}")
    .then(res => res.json())
    .then(posts => {
      setPosts(posts);
    })
  }, [type])
  //dependencies is simplely variable
  return (

    <div style={{padding: 30}}>
        {tabs.map((tab, i) => (
          <button key={i}
            style={type === tab ? {
              color:'#fff',
              backgroundColor:'#333'
            } : {}}
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}

        {posts.map((post,i) => (
          <li key={i}>{post.title || post.name}</li>
        ))}
    </div>

  )
}


export default App;