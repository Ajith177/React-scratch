import React from 'react';
import Practise from './Practise';

function Ajit() {

    const object={
        height:"160",
        weight:"60",
        name:"Ajithganapathy",
        Location:"Manaparai",
        Work:"Zybisys",
        Work_location:"Srirangam"
    }

    // let array=[];

// for(let key in object){
//     array.push([key, object[key]]);
// }
// console.log(array)

  return (
    <div>
      <h2>Need some practice</h2>
      <p>KING of KOTHA</p>
      <Practise z={object}/>
    </div>
  )
}

export default Ajit
