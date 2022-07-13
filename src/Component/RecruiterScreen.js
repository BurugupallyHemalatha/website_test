import React, { useState } from 'react';
import Fresher from './Fresher'
import { Link, useNavigate } from 'react-router-dom';
const RecruiterScreen = () => {
    const [state, setState] = useState('experience');
    const handleChange = (e) => {
        setState(e.target.value)
    }
    const [update, setUpdate] = useState({
        candidateName: "",
        Designation: "",
        Ctc: "",
        JoiningDate: "",
        Email: "",
        Resume:""
    })
   
    const { candidateName, Designation, Ctc, JoiningDate, Email,Resume } = update//destructuring 
    const [candidateNameError, setCandidateNameError] = useState("");
    const [designationError, setDesignationError] = useState("");
    const [ctcError, setCtcError] = useState("");
    const [joiningDateError, setJoiningDateError] = useState("");
    const [emailError, setEmailError] = useState("")
    const[resumeError,setResumeError]=useState("")
   console.log(update,"whole Data")
    const handleChange2 = ((e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value })
    })
    console.log(update.candidateName,"2929")
    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(update)
        setUpdate(update)
    //     if(candidateName===""&&Designation===""&&Ctc===""&&JoiningDate===""&&Email===""&&Resume===""){
    //         alert("invalid filling")
    //     }
    //     else if(!new RegExp(/^a-zA-Z+$/).test(Designation)){
    //         alert("invalid username")
    //     }else if(RegExp(/^a-zA-Z+$/).test(Designation)){
    //         alert("invalid designation")
    //     }else if(new RegExp("^[0-9\b]+$/").test(Ctc)){
    //         alert("invalid ctc")
    //     }else if(!new RegExp("^([a-zA-z0-9\s_\\.\-:])").test(Ctc)){
    //         alert("invalid Resume")
    //     }
    })
    const navigate=useNavigate();
    const handleClick = () => {

        if(update.candidateName===""){
            setCandidateNameError("invalid candidate Name")
        }
        else if(update.candidateName>0){
            setCandidateNameError('')
        }
        else{
            setCandidateNameError("wrong condition")
        }
        if(update.Designation===""){
            setDesignationError("Enter your designation")
        }else if(update.Designation>0){
            setDesignationError("")
        }else{
            setDesignationError("wrog")
        }
        if(Designation.length>0 && candidateName.length>0 ){
            navigate("/table")
        }
        // if (new RegExp(/^a-zA-Z+$/).test(candidateName)) {
        //     setCandidateNameError("")
            
        // } else {
        //      setCandidateNameError('enter your name')
           
        // }
        // if (new RegExp(/^a-zA-Z+$/).test(Designation)) {
        //     setDesignationError("")
        //     console.log("41")
        // }
        // else {
        //     setDesignationError("enter only Numbers")
        //     console.log("45")
        // }
        // if (new RegExp("^[0-9\b]+$/").test(Ctc)) {
        //     setCtcError("")
        // }
        // else {
        //     setCtcError("enter only amount")
        // }
       
        // if (new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(Email)) {
        //     setEmailError("")
        //     console.log("61")
        // }
        // else {
        //     setEmailError("enter your valid email")
        // }
        // if(candidateNameError&& designationError&&ctcError &&candidateName>0 &&Email.length>0){
        //     navigate("/Table")
        // }
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
                    <h4 style={{marginLeft:"-142px",marginTop:" 55px;"}}>Candidate Details</h4>
                    {state === "experience" ? <form onSubmit={handleSubmit}>

                        <label style={{marginRight: "-18px;"}}>Candidate Name:</label>
                        <input  class="text-dark pt-1000" type="text" style={{marginRight: "21px",marginLeft: "29px;"}} onChange={handleChange2} value={candidateName} name="candidateName"/>{candidateNameError}<br />
                        <label style={{marginRight: "-14px;"}}>Designation:</label>
                        <input  class="text-dark" type="text" onChange={handleChange2}style={{marginLeft: "38px"}} name="Designation" value={Designation}/>{designationError}<br />
                        <label  >CTC:</label>&nbsp;
                        <input  type="text" class="text-dark" style={{marginLeft: "74px"}}onChange={handleChange2} value={Ctc} name="Ctc"/>{ctcError}<br />
                        <label  style={{/* margin-right: 1px, *//* margin-left: -59px; */}}>JoiningDate:</label>
                        <input style={{/* margin-right: 10px; */paddingLeft: "42px",marginLeft: "22px"}} type="date" class="text-dark" onChange={handleChange2} value={JoiningDate} name="JoiningDate" />{joiningDateError}<br />
                        <label style={{marginLeft: "43px"}}>Email:</label>
                        <input style={{marginLeft: "21px"}} type="text" class="text-dark" onChange={handleChange2} value={Email} name="Email"/>{emailError}<br />
                        <label   >Resume:</label>
                         <input type="file" value={Resume} onChange={handleChange2}/><br />

                        <button style={{marginRight: "-116px;"}}className='bg-primary' onClick={handleClick}>Send To HR Executive</button>
                    </form> : <Fresher />}

                    {/* {state === "fresher" ? <Fresher/> : ""} */}

                </div>
            </center>
        </div>
    )
}
export default RecruiterScreen;