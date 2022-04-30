import React from 'react';
import { Link } from 'react-router-dom';
const RecruiterScreen = () => {
    return (
        <div class="card">
            <div >
                <nav class="navbar navbar-inverse">
                    <h2 style={{ display: "flex" }} class="text-light">Resource One IT Solutions</h2>
                    <select id="expirence" name="experiance">
                        <option value="experienced">Experianced</option>
                        <option value="Fresher">Fresher</option>
                    </select>
                    <a class="active text-light" href="#home">Onboaring Process</a>
                    <a href="#news" class="text-light">News</a>
                    <a href="#logout" class="text-light">Log Out</a>
                    <a href="#recuiter" class="text-light">recuiter</a>
                </nav>
            </div>
            <center >
            <form>
                <h3 >Candidate Details</h3>
                <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                <input id="myInput" type="text" /><br />
                <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Destination&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                <input id="myInput" type="text" /><br />
                <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                <input id="myInput" type="text" /><br />
                <label htmlFor="myInput">JoiningDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                <input id="myInput" type="date" /><br />
                <label htmlFor="myInput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>&nbsp;
                <input id="myInput" type="text" /><br />
                <label htmlFor="input">Resume:</label><input id="input" type="file" /><br />  
                            
          <Link to="/table"> <button backgroundColor="dark">Send To HR Executive</button></Link> 
            </form>
            </center>
        </div>
    )
}
export default RecruiterScreen;