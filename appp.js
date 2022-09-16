// //import React, { Component } from "react";

// // const Addition=(props)=>{
// //     return(
// //         <>
// //         {parseInt(props.a)+parseInt(props.b)+parseInt(props.c)+parseInt(props.d)}
// //         </>
// //     )
// // }

// //  export default Addition;

// // class Addition extends Component{
 
// //     state={userName:"Vicky"}
// //     render(){
// //         return(
// //             <>
// //             {this.state.userName}
// //             <h1> welcome</h1>
// //             <button onClick={()=>this.setState({userName:"Satish"})}>Click</button>
// //             </>
// //         )
// //     }
    
// // }
// // export default Addition;

// // class Addition extends Component{
// //     constructor(){
// //         super()
// //         this.state={
// //             message:"welcome to "
// //         }
// //     }
// //      changeMessage(){
// //       this.setState
// //         ({message:"welcome to zeeraf"})
        
// //      }
// //      render(){
// //         return(<div>{this.state.message}
// //         <button onClick={()=>this.changeMessage()}>sub</button>
// //         </div>)
// //      }
// // } export default Addition;

// import React, { useState } from "react";
// import Componant1 from "./child1";
// import  Componant2 from "./child2";
// import Componant3 from "./child3";
// import Componant4 from "./child4";
// const Function=()=>{
   
//     const[a] = useState(10);
//     const[b]=useState(20);
//     const[c]=useState(30);
//     const[d]=useState(40);
//     // const a=10; 
//     // const b=20;
//     // const c=30;
//     // const d= 40;
 
//     return(<>
//     <Componant1 value={a}/>
//      <Componant2 value={b}/>
//      <Componant3 value={c}/>
//      <Componant4 value={d}/>  
       
//     </>)
   
//     }
// // const Componant1=(props)=>{
// //    //const [value,setValue]=useState("");

// //     const a=10;
// //  return(
// //      <> 
// //      <h1>your value is{props.value}</h1>
// //      <button onClick={()=>setValue(a)}>set</button>
// //     </>
   
// //  )
// // }
// // const Componant2=(props)=>{
// //     return(
// //         <h1>your value is{props.value}</h1>
// //     )
// // }
// // const Componant3=(props)=>{
// //     return(
// //     <h2>your value is{props.value}</h2>
// //     )
// // }
// // const Componant4=(props)=>{
// //     return(
// //         <h2>your value is{props.value}</h2>
// //     )
// // }
// export default Function;


// import React from "react";
// import { useState } from "react";
// const Function=(props)=>{
//     const[data,setData]=useState("janu")
//    const handleClick=()=>{
//      setData({data:"janureddy"});
//     }
//     return(
//         <>
//         <Child1 data={handleClick}/>
//         </>
//     )


// }

// const Child1=(props)=>{
//     return(<>
//     {props.data}
//     <button onClick={()=>props.data}>Child1</button>
//     </>)
//    }
// export default Function