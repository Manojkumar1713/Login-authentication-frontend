import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Register(){
   const navigate = useNavigate()
    const handleSubmit = (e) => {
        const data_register = {
            firstName,
            lastName,
            email,
            password,
          }
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:8001/v1/register",
            data : data_register,
          };
          console.log(data_register);
          axios(configuration)
          .then((result) => {
            console.log(result)
            setRegister(true);
          })
          .catch((error) => {
            error = new Error();
          });
        
        alert("User registered !!");
        setTimeout(() => { navigate("/login") }, 1000)
      }

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)

    return(
        <>            
            <h2>Register</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                 {/* firstName */}
                 <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name"  
                name="firstName" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>

                 {/* lastName */}
                 <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name"  name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName} />
                </Form.Group>

                {/* email */}
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  name="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  
                onChange={(e) => setPassword(e.target.value)}
                name="password" value={password} />
                </Form.Group>
                <br></br>
                {/* submit button */}
                <Button variant="primary" type="submit" onSubmit={(e)=>handleSubmit(e)}>
                Submit
                </Button>
            </Form>
            <a href="/login">Click here to login user</a>
            {
            register ? (
            <p className="text-success">You Are Registered Successfully</p>
                ) : (
            <p className="text-danger">You Are Not Registered</p>
        )}
        </>
    )
}