import { useState, useEffect } from "react";
//dung taij pham vi global ban ra su kien tai index.js
const lessons = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id:2,
        name: "JS"
    },
    {
        id:3,
        name: "C#"
    }
]
function Content() {
    // subcrible and unsubcrible 
    // nhieu nguoi dang theo doi mot kenh nen khi co su thay doi gi o kenh nay 
    //moi nguoi deu co the thay duoc
    const [count, setCount] = useState(0)
    console.log(1);
    useEffect(()=>{
        console.log("call back is call")
        return () => {
            console.log("Clean up")
        }
    }, [])
    console.log(count)

    return (
        <div>
            {
                count
            }
            <button onClick={() => {setCount(prev => prev+1)}}>Click me</button>
        </div>
    )
}
export default Content;