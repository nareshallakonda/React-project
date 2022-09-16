// import React from "react";
// import { useState } from "react";
// const Parant=()=>{
//     const[value,setValue]=useState({name:"janu",Name:"januReddy"});

     
//    const handleClick=()=>{      
//      setValue({name:"JanuReddy"})
//     }
//     const handleClick1=()=>{       
//         setValue({Name:"janu"});
//        }
//     return(
//         <>
      
//       <Child1 Data1={handleClick}/>{value}
//        <Child2 Data={handleClick1}/>{value} 
//         </>
//     )
// }
// const Child1=(props)=>{
//     return(<>
//     <h1>hello world</h1>
    
//     <button onClick={()=>props.Data1()}>Child1</button>
  
//     </>)
//    }
//    const Child2=(props)=>{
//     return(<>
//     <h1>Welcome world</h1>
  
//     <button onClick={()=>props.Data("janu")}>Child2</button>
//     </>)
//    }
// export default Parant;











import React, { useState } from "react";

const Parent=()=>{
   // debugger
    const[value,setValue]=useState("abcd");
    const handleClick=()=>{        
        setValue("Name")
    }
    const handleClick1=()=>{
        setValue("Welcome")
    }
    return(<>
    <h5>Welcome to parant to child</h5>
    <Child1 Set={handleClick}/>{value}
    <Child1 Set1={handleClick1}/>{value}
    </>)
}
const Child1=(props)=>{
    return(<>
    <button onClick={()=>props.Set("Name")}>set</button>
    {/* <button onClick={()=>props.Set1("Welcome")}>Get</button> */}
    </>)
}
export default Parent;

















