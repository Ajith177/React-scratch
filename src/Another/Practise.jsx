import React from 'react';

const door=false;

function Practise({z}) {
    const {height,weight}=z;

    // console.log(typeof z)     === 'object'................
    
    console.log("Google",z);

    // console.log(Object.entries(z) );
    
    let f=Object.entries(z);
    // console.log(f);

    // console.log(Object)
  return (
    <div>
      <p>Govind's weight is:{weight}</p>
      <p>And height is:{height}</p>

      <div>
        <p> Ajith lives in {z.Location}</p>
        <h1>King of kotha</h1>
        {
            door? <h2>WELCOME</h2>:<h3>Not welcome</h3>
        }

       {
        f.map((values)=>{
          return(
            <>
            <p>{values[1]}</p>
            </>
          )
        })
       }

      </div>
    </div>
  )
}

export default Practise;
