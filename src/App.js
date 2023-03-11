import React from "react";
import {useState} from 'react'

export default function App() {
  const arr=['red','blue','brown','yellow']
  const[color,setColor]=useState('white')
  function handleClick(element){
    setColor(element)
  }
  return (
    <div style={{backgroundColor:color,height:'100vh',width:'100%'}}>
   {arr.map((element)=>(<div>
     <button onClick={()=>handleClick(element)}>{element}</button>
   </div>))}
    </div>
  );
}
