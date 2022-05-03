import React, { useState } from 'react';
import Fresher from './Fresher'
import { Link } from 'react-router-dom';
const RecruiterScreen = () => {
    const [state, setState] = useState('experience');
    const handleChange = (e) => {
        setState(e.target.value)
    }
    return (
        <div class="" >
            <div >
                <nav class="navbar navbar-inverse">
                    <h4 style={{ display: "flex" }} class="text-light">Resource One IT Solutions</h4>
                    {/* <h1 class="navbar-brand text-white" href="#">Resource One IT Solutions</h1> */}
                    <select style={{ marginLeft: "500px" }} onChange={handleChange}>
                        <option value="experience">Experianced</option>
                        <option value="fresher">Fresher</option>
                    </select>

                    <a class="active text-light" href="#home" style={{ marginLeft: "" }}>Onboaring Process</a>
                    <i class="fa fa-bell " aria-hidden="true" style={{ color: "white" }}></i>
                    <a href="#logout" class="text-light">Log Out</a>
                    <a href="#recuiter" class="text-light">hrexecutive</a>
                </nav>
            </div>
            <center >

                <div className='text-white ' style={{ width: "50%" }}>
                    <h4 >Candidate Details</h4>
                    {state === "experience" ? <form>

                        <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Candidate Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                        <input id="myInput" class="text-dark pt-1000" type="text" /><br />
                        <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                        <input id="myInput" class="text-dark" type="text" /><br />
                        <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                        <input id="myInput" type="text" class="text-dark" /><br />
                        <label htmlFor="myInput" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JoiningDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                        <input id="myInput" type="date" class="text-dark" /><br />
                        <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                        <input id="myInput" type="text" class="text-dark" /><br />
                        <label htmlFor="input"id="input" type="file">Resume:</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input id="input" type="file" /><br />

                        <button className='bg-primary' >Send To HR Executive</button>
                    </form> : <Fresher />}

                    {/* {state === "fresher" ? <Fresher/> : ""} */}

                </div>
            </center>
        </div>
    )
}
export default RecruiterScreen;