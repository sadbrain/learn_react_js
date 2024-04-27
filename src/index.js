import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const emmitCommit = (id) => {
  setInterval(() => {

    //chu dong tu phat mot event
    //bat cu file deu co the lang nghe su kien nay
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail: `Noi dung comment cua lesson ${id}`
      })
    )
  }, 2000)
}
emmitCommit(1);
emmitCommit(2);
emmitCommit(3);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
