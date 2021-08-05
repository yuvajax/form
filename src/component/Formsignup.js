import React, { useState,useEffect, Fragment } from 'react'
import 'antd/dist/antd.css'
import './Formsignup.css'
import img from './image.jpg'
import { Form, Input, Button, Checkbox, Table, message } from 'antd';
import Password from 'antd/lib/input/Password';
import Passwordstrong from './Passwordstrong';
import Formsuccess from './Formsuccess';

function Formsignup({handleSubmits},callback) {
  const [score, setScore] = useState("")
  const [form] = Form.useForm(); 
  const [values ,setvalues] = useState([])
  const [error ,seterror] = useState([])
  const [submitted,setsubmitted] = useState(false)



  const onfinished = (values) => {
    setvalues(values)
    console.log("Values",values)
    if(values != ""){
      message.success('Registered Successfully');
    }
  };

  const onfinishfail = (errorInfo) => {
    seterror(errorInfo)
    console.log("Error",error)
  };


        return (
        <section>
          <div className="imgbx">
            <img src = {img}/>
          </div>
          <div className="container">
          <div className="inner-container">
            <h1>Register</h1>
        <Form className="form-container" form={form} name="register" onFinish={onfinished} onFinishfail={onfinishfail}>
          <Form.Item className='label_container'
            label="Firstname"
            name="firstname"
            rules={[{ required: true, message: 'Please input your Firstname!',
            whitespace:true }]}
          >
            <Input placeholder="Firstname"/>
          </Form.Item>

          <Form.Item className='label_container'
            label="Lastname"
            name="lastname"
          >
            <Input placeholder="Lastname" />
          </Form.Item>

          <Form.Item className='label_container'
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone!' },
            {validator:(_, value) =>
              value < 0 || value > 9 && value.length < 11 ? Promise.resolve() : Promise.reject("Enter Valid Number")
            }]}
          >
            <Input placeholder="Phone"/>
          </Form.Item>

          <Form.Item className='label_container'
            label="Email"
            name="email"
            rules={[
                { type:"email",message:"Invalid Email"},
                { required: true, message: "Please input your Email!" }]}
          >
            <Input placeholder="Email"/>
          </Form.Item>
    
          <Form.Item className='label_container' className="passcontainer"
            label="Password"
            name="password"
            onChange={e =>setScore(e.target.value)}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password"/>
          </Form.Item>
          <div className="passwords"><Passwordstrong score={score}/></div>

          <Form.Item className='label_container' style={{marginLeft:'-60px'}}
            label="Conform Password"
            name="conformpassword"
            dependencies={[Password]}
            rules={[
                { required: true, message: 'Please input your password!' },
                ({getFieldValue}) => ({
                    validator(_, value){
                        if(!value || getFieldValue("password") === value){
                            return Promise.resolve();
                        }
                        return Promise.reject("Password Mismatch")
                    }
                })
              ]}
          >
            <Input.Password placeholder="Password"/>
          </Form.Item>
    
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item shouldUpdate wrapperCol={{ offset: 8, span: 16 }}>
          {() => (
            <Fragment>
          <Button
            type="primary"
            htmlType="submit"
          >Register
            </Button>
            <Button style={{marginLeft: 20}}
            htmlType="button" onClick={() => form.resetFields(setScore('0'))}>
              Reset
            </Button>
            </Fragment>
            )}
          </Form.Item>
        </Form>
        </div>
        </div>
        </section>
      );
}

export default Formsignup
