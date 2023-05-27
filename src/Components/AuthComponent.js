import React from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthComponent(){
    const token = cookies.get("TOKEN");
    const navigate = useNavigate()
    if(token !== "login success"){
        setTimeout(() => { navigate("/login") }, 1000)
    }
    else{
        return(
            <div>
                <h1> Auth component</h1>
            </div>
        )
    }
}