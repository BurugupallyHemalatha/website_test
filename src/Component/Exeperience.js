import React from 'react';
import data from '../mock-data.json';
const Exeperience = () => { 
  const[state,setState]=React.useState(data)//use all span 3 for columes
  return (
    <div>
      <div>
        <nav class="navbar navbar-inverse">
          <h4 style={{ display: "flex" }} class="text-light">Resource One IT Solutions</h4>
          <select id="expirence" name="experiance">
            <option value="experienced">Experianced</option>
            <option value="Fresher">Fresher</option>
          </select>
          <a class="active text-light" href="#home">Onboaring Process</a>
          <i class="fa fa-bell " aria-hidden="true" style={{color:"white"}}></i>

          <a href="#logout" class="text-light">Log Out</a>
          <a href="#recuiter" class="text-light">recuiter</a>
        </nav>
      </div>
      <table class=" card container table table-striped" style={{width:"100%"}}>
       <center class="table">
         <thead>
          <tr>
            <th class="p-5">Id</th>
            <th class="p-5">Name</th>
            <th class="p-5">Designation</th>
            <th class="p-5">CTC</th>
            <th class="p-5">Joining Date</th>
            <th class="p-5">Email id</th>
            <th class="p-5">Resume</th>
            <th class="p-5" >Status</th>
          </tr>
        </thead>
        <tbody>
          {state.map((states)=>(
            <tr>
            <td>{states.id}</td>
            <td>{states.Name}</td>
            <td>{states.Designation}</td>
            <td>{states.CTC}</td>
            <td>{states.JoiningDate}</td>
            <td>{states.Email}</td>
            <td>{states.Resume}</td>
            <td colSpan="3" style={{textAlign:"center"}}>{states.Status}</td>
            </tr>
          ))}
          <tr>      
          </tr>    
        </tbody>   
        </center>
      </table>
    </div>
  )
}
export default Exeperience;