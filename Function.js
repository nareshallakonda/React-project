// import React, { useEffect, useState } from "react";

// const Function=()=>{
//     const [userName,setName]=useState("Zeeraf")
//     const [count,setCount]=useState(0);
//     const [calculation,setCalculation]=useState(0);
//      const[data,setData]=useState([]);
//      const url = "https://jsonplaceholder.typicode.com/posts";
//     useEffect(()=>{       
//         getListOfUsers()
//     },[])

//    useEffect(()=>{
//     setCalculation(()=>count*2);
//    },[count]);
//   const getListOfUsers=()=>{
//     fetch(url)
//         .then ((res)=>res.json())
//         .then((dataa)=>{
//             setData(dataa);
//         });
//   }
//     return(
//         <>
        
//         <h1>Welcome to Functional Componant  {userName}</h1>
//         <button onClick={()=>setName("Technologies")}>Click</button>
//         <h2>count is {count}</h2>
//         <button onClick={()=>setCount(count+1)}>count</button>
//         <button onClick={()=>setCount(count-1)}>!count</button>
//         {data.map(post => (
//         <div key={post.id}>{post.title}</div>
//         ))
// }
//        <p>count:{count}</p>
//        <button onClick={()=>setCount((count)=>count+2)}>+</button>
//        {calculation}
//         </>
//     )
// }
// export default Function;