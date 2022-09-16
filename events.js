import React from "react";
import { Component } from "react";

class Event extends Component{

    state={
        btn:0,
        num1:0,
        num2:0,
        num3:0,
        num4:0,
        num5:0,
        num6:0,
        num7:0,
        num8:0,
        num9:0,
        num10:0,
        num11:0
    }
    
    getSum(num1, num2) {
        debugger
        const result = parseInt(num1) + parseInt(num2);
        this.setState({ ...this.state, btn: result });

    }

    blur(num1) {
        const sample = parseInt(num1);
        this.setState({ ...this.state, num3: sample });

    }
    onkeyUp(num1) {
        const sample = parseInt(num1);
        this.setState({ ...this.state, num4: sample });

    }
    handleChange(e) {
        const { target: { value, name } } = e;
        this.setState({ ...this.state, [name]: value });
    }
    onFocus(num1) {
        const sample = parseInt(num1);
        this.setState({ ...this.state, num6: sample });
    }
    onFocus(num1) {
        const sample = parseInt(num1);
        this.setState({ ...this.state, num6: sample });
    }

    onKeyDown(num1) {
        const sample = parseInt(num1);
        this.setState({ ...this.state, num5: sample });

    }

    toLower = (num1) => {
        const sample = parseInt(num1);
        this.setState({ ...this.state, num8: sample });
    }
    onMouseOver = (num1) => {
        const mouse = parseInt(num1);
        this.setState({ ...this.state, num9: mouse });
    }

    onMouseLeave(num1) {
        const mouse = parseInt(num1);
        this.setState({ ...this.state, num10: mouse });

    }
    onInput(num1) {
        const myInput = parseInt(num1);
        this.setState({ ...this.state, num11: myInput });

    }

    
    render(){
        
        return(<>
       
        <form>            
        NUM1:<input type="text" name="num1" onChange={(e)=>this.handleChange(e) } 
         onBlur={()=>this.blur(this.state.num1)}
         onKeyUp={() => this.onkeyUp(this.state.num1)}
         onKeyDown={() => this.onKeyDown(this.state.num1)}
         onFocus={() => this.onFocus(this.state.num1)}
         toUpper={() => this.toUpper(this.state.num1)}
         toLower={() => this.toLower(this.state.num1)}
         onMouseOver={() => this.onMouseOver(this.state.num1)}
         onMouseLeave={() => this.onMouseLeave(this.state.num1)}
         oninput={() => this.onInput(this.state.num1)}
        ></input><br/>
        NUM2:<input type="text" name="num2" onChange={(e)=>this.handleChange(e)}></input><br/>
        <button type="button"  onClick={()=>this.getSum(this.state.num1,this.state.num2)}onKeyPress={(e) =>this. getSum(e)}>GET</button><br/>  
        Result is :{this.state.btn}<br/>
        Result:<input type="text" name="result" ></input><br></br>
                onBlur is:{this.state.num3}<br />
                onkeyUp is:{this.state.num4}<br />
                onKeyDown is:{this.state.num5}<br/>
                onFocus is:{this.state.num6}<br/>               
                toLower is:{this.state.num5}<br/>
                onMouseOver is:{this.state.num9}<br/>
                onMouseLeave is:{this.state.num10}<br/>
                onInput is:{this.state.num11}<br/>
        </form>
        </>)
    }
}
 
export default Event;