
import React, { useState } from "react";
const Console = () => {
    const data = [{ name: 'Navanitha', progresss: [{ subject: 'telugu', marks: 100 }] },
    { name: 'Rachana', progresss: [{ subject: 'English', marks: 99 }] },
    { name: 'Rajeetha', progresss: [{ subject: 'Maths', marks: 30 }] }] 
   
    return data.map((item, i) => {
      let  grade=item.progresss.map((val)=>val.marks >45 ? 'Passed':'Failed');     
        return (<> 
             
            <td>{item.name}</td>            
           <table border="2">
            <thead>                
                <th>subject</th> 
                <th>marks</th>
                <th>Grade</th>
                </thead>
                <tbody>                
                <td>
                    {item.progresss.map((val)=>val.subject)}
                </td>
                <td>
                    {item.progresss.map((val)=>val.marks )}                  
                </td>
               <td>{grade}</td>
                </tbody>               
            </table>
        </>)
    })
}
export default Console;


// import React from "react";
// const Console=()=>{
// return(<>

// </>)
// }
// export default Console;


