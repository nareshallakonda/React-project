// import React, { useState} from "react";

// const Componant1 = (props) =>{
//     const [value,setValues] = useState();
// const setValue =(values) =>{
//     setValues(values);
// }
//     return(
//         <>
//           {value}
//         <button onClick={()=>setValue(props.value)}>set</button>
  
//         </>
//     )
// }
// export default Componant1;

// import React from "react";

// const Componant1=(props)=>{
//     return(
//         <>
//         <button onClick={()=>handleClick()}
//         </>
//     )
// }





// import React from "react";
// const Child1=(props)=>{
//     return(<>
//     <h1>hello world</h1>
//     {props.data}
//     <button onClick={()=>props.Data}>Child1</button>
    
//     </>)
//    }
// export default Child1;






























import React from 'react'
class Child extends React.Component{
	
	onTrigger = (event) => {
		this.props.parentCallback(event.target.myname.value);
		event.preventDefault();
	}

	render(){
		return(
		<div>
			<form onSubmit = {this.onTrigger}>
				<input type = "text"
				name = "myname" placeholder = "Enter Name"/>
				<br></br><br></br>
				<input type = "submit" value = "Submit"/>
				<br></br><br></br>
			</form>
		</div>
		)
	}
}
export default Child
