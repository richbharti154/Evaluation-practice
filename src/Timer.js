import React from 'react'
 import {useState}  from 'react'
export default function Timer(){
  let newTime=new Date().toLocaleTimeString()
  const[time,setTime]=useState(newTime)
  const[stop,setStop]=useState(false)
  function updateTime(){
   let newTime1= new Date().toLocaleTimeString()
   setTime(newTime1)
    
  }
  setInterval(updateTime,1000)
  function handleStop(){
    setStop(!stop)
  }
  
  return(
    <div>
      <p>{time}</p>
      
      <button>Restart</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}