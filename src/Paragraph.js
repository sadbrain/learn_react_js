import { useContext } from "react"
import { themeContext } from "./ThemeProvider"
function Paragraph(){
    const context = useContext(themeContext)
    return (<p class={context.theme}>toi cuc ky yeu thich mot nguoi</p>)
}
export default Paragraph