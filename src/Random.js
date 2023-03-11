import React from 'react'
import {useState} from 'react'
export default function Random(){
  const arr=[2,3,6,8,9,1]
  const[random,setRandom]=useState(arr)
  function handleClick(){
  let c=Math.ceil(Math.random()*arr.length)
  console.log(c)
  setRandom(c)
  }

  return(
    <div>
       <p>{random}</p> 
      <button onClick={handleClick}>Random</button>
    </div>
  )
}