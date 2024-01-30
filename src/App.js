import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [cart, setCart]=useState("0")
  const resultHandler=()=>{
    setCart(eval(cart))
  }
  
  const cancel = (a) => {
    setCart("")
  }
  const prestage = (b) => {
    setCart(cart+"%")
  }
  const plusandminus = (c) => {
    setCart(cart+"+/-")
  }
  const dived = (d) => {
    setCart(cart+"÷")
  }
  const seven = (e) => {
    setCart(cart+"7")
  }
  const eight = (f) => {
    setCart(cart+"8")
  }
  const nine = (g) => {
    setCart(cart +"9")
  }
  const multipal = (h) => {
    setCart(cart+"*")
  }
  const four = (i) => {
    setCart(cart + "4")
  }
  const five = (j) => {
    setCart(cart + "5")
  }
  const six = (k) => {
    setCart(cart + "6")
  }
  const minus = (l) => {
    setCart(cart +"-")
  }
  const one = (m) => {
    setCart(cart + "1")
  }
  const tow = (n) => {
    setCart(cart + "2")
  }
  const three = (o) => {
    setCart(cart + "3")
    
  }
  const plus = (p) => {
    setCart(cart +"+")
  }
  const zero = (q) => {
    setCart(cart +"0")
  }
  const dote = (r) => {
    setCart(cart +".")
  }
  // const eqal = (s) => {
  //   setCart("=")
  // }
  return (
    <div className="continer">
      <div className='display'><p>{cart}</p></div>
      <div className='row-one'>
        < button className='buttons' onClick={(a) => cancel()}>C</ button >
        < button className='buttons' onClick={(b) => prestage()}>%</ button >
        < button className='buttons' onClick={(c) => plusandminus()}>+/-</ button >
        < button className='buttons' onClick={(d) => dived()}>÷</ button >
      </div>

      <div>
        < button className='buttons' onClick={(e) => seven()}>7</ button >
        < button className='buttons' onClick={(f) => eight()}>8</ button >
        < button className='buttons' onClick={(g) => nine()}>9</ button >
        < button className='buttons' onClick={(h) => multipal()}>*</ button >
      </div>

      <div>
        < button className='buttons' onClick={(i) => four()}>4</ button >
        < button className='buttons' onClick={(j) => five()}>5</ button>
        < button className='buttons' onClick={(k) => six()}>6</ button >
        < button className='buttons' onClick={(l) => minus()}>-</ button >
      </div>

      <div>
        < button className='buttons' onClick={(m) => one()}>1</ button >
        < button className='buttons' onClick={(n) => tow()}>2</ button >
        < button className='buttons' onClick={(o) => three()}>3</ button >
        < button className='buttons' onClick={(p) => plus()}>+</ button >
      </div>

      <div>
        < button className='buttons' onClick={(q) => zero()}>0</ button >
        < button className='buttons' onClick={(r) => dote()}>.</ button>
        < button className='buttons' onClick={resultHandler}>=</ button>

      </div>






    </div>
  );
}

export default App;
