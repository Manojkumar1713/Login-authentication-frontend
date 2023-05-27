import React, { useState } from "react"
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const navigate = useNavigate()
    const cookies = new Cookies();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data  = {
            email,
            password,
        }
        const config = {
            method : "post",
            url : "http://localhost:3001/user/login",
            data : data,
        }
        axios(config)
        .then( (res) => {
            localStorage.setItem('logged', res.data)
            if(res.data === "login success"){
                setLogin(true);
                cookies.set("TOKEN", res.data, {
                    path: "/",
                  });
                setTimeout(() => { navigate("/auth") }, 1000)
            }
            else{
                alert(res.data);
            }
        })
        .catch( (error) => {
            console.log(error);
        })
    }
    return(
        <div>           
                <h2>Login</h2>
                <Form onSubmit={(e) => handleSubmit(e)}>
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
                <a href="/">Click here to sign-in the user</a>
                {/* {
                login ? (
                <p className="text-success">You Are logged in Successfully</p>
                    ) : (
                <p className="text-danger">You Are Not logged in</p>
            )} */}
        </div>
    )
}