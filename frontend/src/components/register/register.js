import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        address: "",
        DOB:"",
        Qualifications:"",
        skillset:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, address, DOB,Qualifications,skillset } = user
        if( name && email && password && address &&  DOB && Qualifications && skillset){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="text" name="address" value={user.address} placeholder="Your Address" onChange={ handleChange }></input>
            <input type="text" name="DOB" value={user.DOB} placeholder="Your Date Of Birth" onChange={ handleChange }></input>
            <input type="text" name="Qualifications" value={user.Qualifications} placeholder="Your Qualificatons" onChange={ handleChange }></input>
            <input type="text" name="skillset" value={user.skillset} placeholder="Your Skillsets" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register