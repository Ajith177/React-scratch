import React, { useEffect, useState } from 'react';
import Test  from './Test';

function Ajith() {

  const [value,setValue]=useState(
    {
      name:"Ajith",
      Work:"Google",
      Location:"California"
    }
  )

  const [item,setItem]=useState(1)

  // const itemname=item+count;

  const update=()=>{
    setValue(items=>{
      return{...items,name:"ajithganapathy"}
    })
  }

  useEffect(()=>{
   console.log(item)   
  },[item])

  function kick(){
  //   setItem((previousState)=>{
  //     return previousState+1
  //  })
  setItem(item+1)
  }

  return (
    <div>
      Hello
      <h3>{value.name}</h3>
      <h3>{value.Work}</h3>
      <h3>{value.Location}</h3>
      <p>I have  rendered {item} times</p>
      <button onClick={kick}>Clickme</button>
      <button onClick={update}>CLICK HERE</button>
      <Test/>
    </div>
  )
}

export default Ajith
