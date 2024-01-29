import logo from './logo.svg';
import './App.css';
import {useState}from "react";

function App() {
  const[cart,setCart]=useState(10000)
  const kis=(a)=>{
    setCart(cart+100)
  }
  const ki=(b)=>{
    setCart(cart-1000)
  }
  const k=(c)=>{
    setCart(cart+200)
  }
  const de=(d)=>{
    setCart(cart-2000)
  }
  return (
    <div className="App">
    <p>{cart}</p>
    <button onClick={(a)=>kis()}>100</button>
    <button onClick={(b)=>ki()}>-1000</button>
    <button onClick={(c)=>k()}>200</button>
    <button onClick={(d)=>de()}>-2000</button>

    

    </div>
  );
}

export default App;
