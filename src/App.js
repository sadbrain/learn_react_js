import {useState} from "react";


const gifts = [
  'CPU i9',
  'RAM 32G RGB',
  'RGB Keyboard',
]
// const App = () => {

//   const [gift, setGift] = useState("Chua co phan thuong");
//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index]);
//   }
//   return (
//     <div style={{padding:32}}>
//         <h1>{gift}</h1>
//         <button onClick={randomGift} style={{padding:20, borderRadius:20, fontSize: 30}}>lay thuong</button>
//     </div>
//   )
// }

//one-way binding => react
//two-way binding => vue

// chieu tuong tac tren giao dien 
//chieu du lieu

//mot chieu la chieu tuong tac tren giao dien 
//thay doi du lieu thi trong state thay doi gia tri tuong ung voi gia tri go vao


//sua gia tri trong component ma giao dien cung thay doi theo => two way binding

// const App = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const handleRegister = () => {
//     console.log({email, name})
//   }
//   return (
//     <div style={{padding:32}}>
//         <input
//         value={name}
//         onChange={e => setName(e.target.value)}/>
//            <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}/>
//         <button onClick={handleRegister}>register</button>
//     </div>
//   )
// }


// two way binding with radio 
const courses = [
  {
    id:1,
    name: 'HTML, CSS'
  },
  {
    id:2,
    name: 'Javascript'
  },
  {
    id:3,
    name: 'ReactJS'
  }
]

// const App = () => {
//     const [checked, setChecked] = useState(courses[0].id);
//     const handleRegister = () => {
//     }
//     console.log(checked)
//     return (
//       <div style={{padding:32}}>

//         {courses.map(c => (
//             <div key={c.id}>
//                 <input checked={checked === c.id} onChange={() => setChecked(c.id)}type="radio"/>
//                 <label>{c.name}</label>
//             </div>
//         ))}
             
//           <button onClick={handleRegister}>register</button>
//       </div>
//     )
//   }

// const App = () => {
//     const [checked, setChecked] = useState(courses[0].id);
//     const handleRegister = () => {
//     }
//     console.log(checked)
//     return (
//       <div style={{padding:32}}>

//         {courses.map(c => (
//             <div key={c.id}>
//                 <input
//                 checked = {checked === c.id} 
//                 onChange = {() => setChecked(c.id)}
//                 type="radio"/>
//                 <label>{c.name}</label>
//             </div>
//         ))}
             
//           <button onClick={handleRegister}>register</button>
//       </div>
//     )
//   }
//two way binding with checkbox
// const courses = [
//     {
//       id:1,
//       name: 'HTML, CSS'
//     },
//     {
//       id:2,
//       name: 'Javascript'
//     },
//     {
//       id:3,
//       name: 'ReactJS'
//     }
//   ]

//   const App = () => {
//       const [checked, setChecked] = useState([]);
//       const handleCheck = (id) => {
//         setChecked(prev => {
//           const ischecked = checked.includes(id);
//           if(ischecked) 
//             return checked.filter(c => c !== id) 
//           else
//             return [...prev, id]
//         });
//       }
//       const handleRegister = () => {
//         console.log({ids: checked})
//       }
//       console.log(checked)
//       return (
//         <div style={{padding:32}}>
  
//           {courses.map(c => (
//               <div key={c.id}>
//                   <input
//                    checked={checked.includes(c.id)}
//                    onChange={() => handleCheck(c.id)}
//                    type="checkbox"
//                    />
//                   <label>{c.name}</label>
//               </div>
//           ))}
               
//             <button onClick={handleRegister}>register</button>
//         </div>
//       )
//     }
export default App;
