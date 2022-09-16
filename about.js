import React, { useState } from "react";
const About1=()=>{
    const [color, setColor] = useState("red"); 
    const[count,setcount]=useState(0);
    const [data,setData]=useState({select:'',date:'',cname:''})
    const mouseover=()=>{
       setColor("blue") ;
       setcount(count+1)      
    } 
    const mouseout=()=>{
        setColor("red")          
     } 
     const handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
     }
     const handlepast=(e)=>{
        e.preventDefault();      
        let option=data.select;
        if(option=='day'){
            
        }
       console.log(option);
     }

    return(<>    
     <h5 onMouseOver={mouseover}  {...color} onMouseOut={mouseout} style={{color:'red'}}>Mouseover</h5> 
    <h5>this is About page</h5>
    Name:<input type="text" name="name" onMouseOver={mouseover}  {...count} onMouseOut={mouseout} style={{color:color}}></input><br/>
 mouseover is: { count}<br/>
    date:<input type='date' name='date' onChange={(e)=>handlechange(e)}/><br/>
    select<select onChange={(e)=>handlechange(e)} name="select">
        <option value="day">Day</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        </select><br/>
    choseNo:<input type='text' name='cname' onChange={(e)=>handlechange(e)}/><br/>
    <button style={{color:'blue'}} onClick={handlepast}>Past</button>
    <button style={{color:'blue'}}>Future</button>
    </>)
}
export default About1;