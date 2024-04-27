import { useState, useLayoutEffect } from "react";
// uselayoutEffect and useEffect are the same
//useEffect mac dinh dung 
// 1. cap nhat lai state
// 2. cap nhat lai DOM (mutated)
// 3. render lai UI
// 4. Call clean up neu deps change
// 5. Call useEffect callback

//useLayoutEffect
// 1. cap nhat lai state
// 2. cap nhat lai DOM (mutated)
// 3. Call clean up neu deps change (sync)
// 4. Call useEffect callback (sync) thang nay thuc hien xong moi render lai ui
// 5. render lai UI
function Content() {
    //render lai neu count > 3 se ve 0, no se bi dat neu dung useEffect vi count tang thanh 4 roi hien thi ra dom moi den useEffect
    
    const [count, setCount] = useState(0)
    console.log(1);
    useLayoutEffect(()=>{
        if(count > 3) setCount(0)
    }, [count])

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