import { useState, useEffect } from "react";

function Content() {
  const [countDown, SetCountDown] = useState(180);
    useEffect(() => {
        const timerId = setInterval(()=>{
            SetCountDown(prev => prev - 1)
        }, 1000)

        return () => clearInterval(timerId);
     })
    return (
        <h1>
            {countDown}
        </h1>
    )
}
export default Content;