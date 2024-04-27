import { useState, useRef, useEffect } from "react";
// Use Ref
// luu cac gia tri qua mot bien tham chieu o ben ngoai 
// funciton Component 

//use Rel tuong tu nhu vi dua timerId ra ngoai component function

function Content() {
    
    const [count, setCount] = useState(60)
    const preCount = useRef()
    const timerId = useRef()
    const h1Ref = useRef()
    // => lay gia tri ref.current 
    const handleStart = () => {
        timerId.current  = setInterval(() => {
            setCount(prev => prev - 1)
        },1000)

    }
    useEffect(()=>{
        preCount.current = count
    }, [count])
    const handleStop = () => {
        if(timerId.current){
            clearInterval(timerId.current) 

        }
        // => se khong dung duoc neu Content component reder lai 
        // vi timerId no se la undefined 
        // => use ref
    }
    console.log(count, preCount.current)
    return (
        <div>
            <h1 ref={h1Ref}>Hi ar</h1>
            {
                count
            }
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default Content;