import React from 'react'
import  {useState} from 'react'
export default function convert(){
  const[value1,setValue1]=useState('')
  const[value2 ,setValue2]=useState('')
  function handleInput1(e){
    setValue1(e.target.value)
  }
  function handleInput2(e){
    setValue2(e.target.value)
  }
  return(
    <div>
     
     <input onChange={handleInput1} placeholder={`${(value2)*16}  PX`} />
     <input onchange={handleInput2} placeholder={`${(value1)/16}  REM`}/>
    </div>
  )
}
