import  React from 'react'
import {useState} from 'react'
export default function Color(){
  const arr=['red','blue','yellow','black','brown']
  const[color,setColor]=useState('white')
  function handleClick(element){
    setColor(element)
  }
  return(
    <div style={{backgroundColor:color}}>
      {arr.map((element)=>
      <div><button onClick={()=>handleClick(element)}>{element}</button></div>)}
    </div>
  )
}