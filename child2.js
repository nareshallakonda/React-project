 //import React, { useState } from "react";

// const Componant2= (props)=>{
//  const [value,setValues]=useState()
//  const setValue=(values)=>{
//    setValues(values);
//  }
//     return(
//         <>
//           {value}
//         <button onClick={()=>setValue(props.value)}>Child2</button>
//         </>
//     )
// }
// export default Componant2;


// import React from "react";


// const Child2=(props)=>{
//   return(<>
//   {props.data}
//   <button onClick={()=>props.Data}>Child2</button>
//   </>)
//  }
// export default Child2;

import React, { useState } from "react";
 const Parent3 =()=>{
  const [name,setName]=useState("naru");
  const handleChange=(props)=>{
    setName(props)
 }
 return(
  <>
  <h4>Welcome to Child to Parent</h4>    
   <Child2 Data={name} handleClick={handleChange}/>
   {name}
  </>
 )
}

const  Child2=(props)=>{
  return(

    <>    
    <button onClick={()=>props.handleClick("Naresh")}>Change</button> 
    </>
  )
}
export default Parent3;



















