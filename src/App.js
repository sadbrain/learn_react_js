import Content from "./Content";
import "./App.css"
import { useContext } from "react";
import { themeContext } from "./ThemeProvider";
// use Context
//CompA => ComB => ComC ma khong can dung prop
//khong can truyen qua thang trung gian de den duoc thang minh can

//1. create context create mot pham vi
// 2. provider giup chuyen di du lieu
// 3. consumer nhan duoc giu lieu tu thang cha
//Theme: Dark/Light

//1. create context at ThemeProvider
//2. provide context at index.js
const App = () => {
  const context = useContext(themeContext)
  return (
    // 2. 

        <div style={{padding:20}}>
              <button onClick={context.toggleTheme} >Toggle theme</button>
              <Content/>
          </div>

  )
}
// 3. qua paragraph

export default App;