import React,{useState} from 'react';

 const Funcstate = () => {
    const [name,setname]=useState("Pandu");
    const [age,setage]=useState("25")
  return (
    <div><h1 onClick={()=>{setname("Mounika") ; setage("45")}}>{name} Funcstate component and age is {age}</h1></div>
  )
}

export default Funcstate;
