import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

//import '../Component/Login.css';
const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const navigate=useNavigate();
    const { email, password } = state;//destructuring 

    const [error, setError] = useState("");
    const[passwordError,setPasswordError]=useState("")
    const handleChange = ((e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    })
    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(state)
    })
    const handleClick = () => {
        if(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(email)){
            setError("")
        }
        else {
            setError("Email is invalid")
        }
        if(new RegExp(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/).test(password)){
            setPasswordError("")
        }
        else{
            setPasswordError("Enter the secured password")
        }      
        if(!error && !passwordError && email.length>0 && password.length>0){
            navigate("/recruiterScreen")
        }
        // if(email.length>0){
        //     alert("Email is invalid");
        // }else if(password.length<0){
        //     alert("Enter some password")
        // }else{
        //     navigate("/RecruiterScreen")
        // }
    }
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
                <h1 class="navbar-brand text-white" href="#">Resource One IT Solutions</h1>
            </nav>
            <hr />
            <center class="card cardalign w-100">
                <h3>Login</h3>
                <form method="get" action="RecruiterScreen.js" onSubmit={handleSubmit}>
                    <input id="myInput" type="text" placeholder='Email' value={email} name="email" onChange={handleChange} /><br />
                    <span style={{color:"red"}}>{error}</span>

                    <br />
                    <input id="myInput" type="password" placeholder='Password' value={password} name="password" onChange={handleChange}/><br />
                    <br />
                    <span style={{color:"red"}}>{passwordError}</span><br/>
                    {/* <Link to="/recruiterscreen"><button type="Email" class="btn btn-primary">Login</button></Link><br/> */}
                    <button class="btn btn-primary" onClick={handleClick}>Login</button><br />
                    <span class="psw"><a href="#"> Forgot password?</a></span>
                </form>
            </center>
        </div>
    )
}
export default Login;
