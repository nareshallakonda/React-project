import { Form, Row } from "antd";
import React, { Component } from "react";
import {Col,Input,DatePicker} from 'antd';
class Test5 extends Component{
    constructor(props){
        super(props)
        this.state={
            country:[],
            state:[],
            city:[]
        }
    }
     
    handleCountry=(id)=>{
         const dt=this.states.filter(x=>x.countryid===id)
         this.setState(dt);
    }
    handleState=(id)=>{
        const dt=this.citys.filter(x=>x.stateid===id)
        this.setState(dt);
    }
   
    render(){   
return(<>
<Form>
    <Row>
    <Col>
    <div>
    <Form.Item 
     name="FirstName"
     label="FirstName"
     rules={[
         { required: true, message: "Is required" },
        
     ]}
    > <Input 
    placeholder="First Name"
    maxLength={50}/>
    </Form.Item>
    </div>
    </Col>
    <Col>
    <div>
    <Form.Item 
     name="lastName"
     label="LastName"
     rules={[
         { required: true, message: "Is required" },
        
     ]}
    > <Input 
    placeholder="lastName"
    maxLength={50}/>
    </Form.Item>
    </div>
    </Col>
    <Col>
    <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        </Col>
    <Col>
    <Form.Item 
     name="disignation"
     label="disignation"
     rules={[
         { required: true, message: "Is required" },
        
     ]}
    > <select>
         <option>select any one</option>
        <option>Ui</option>
        <option>API</option>
        <option>tester</option>
        </select> 
    </Form.Item>
    </Col>
    <Col>
    <Form.Item 
     name="department"
     label="department"
     rules={[
         { required: true, message: "Is required" },
        
     ]}
    > <select>
        <option>select any one</option>
        <option>Developer</option>
        <option>Designer</option>
        <option>tester</option>
        </select> 
    </Form.Item>
    </Col>
    <Col>
    <Form.Item
    name="email"
    label="Email"
    rules={[{required:true,message:"Is Required"},]}
    ><Input type="email" placeholder="Enter Email"/></Form.Item>
    </Col>
    <Col>
    <Form.Item
    name="mobile"
    label="Mobile"
    rules={[{required:true,message:"Is Required"},]}
    ><Input placeholder="Enter Mobile"/></Form.Item>
    </Col>
  
    </Row>
</Form>
</>) }
}
export default Test5;