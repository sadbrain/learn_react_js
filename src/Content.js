import { memo } from "react";
function Content({onIncrease}) {
    console.log("re-render")
    return(
            <>
                <h1>hi mama</h1>
                <button onClick={onIncrease}>Increase</button>
            </>
         )

}
export default memo(Content);