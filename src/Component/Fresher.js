import React from 'react';
const Fresher = () => {
    return (
        <div>
            <form>
                <label htmlFor="myInput">My Input:</label>&nbsp;
                <input id="myInput" class="text-dark" type="text" /><br />
                <label htmlFor="myInput">Higher Qualification:</label>&nbsp;
                <input id="myInput" class="text-dark" type="text" /><br />
                <label htmlFor="myInput">Percentage:</label>
                <input id="myInput" type="text" class="text-dark" /><br />
                <label htmlFor="myInput" >JoiningDate:</label>
                <input id="myInput" type="date" class="text-dark" /><br />
                <label htmlFor="myInput">Email:</label>&nbsp;
                <input id="myInput" type="text" class="text-dark" /><br />
                <label htmlFor="input">Resume:</label><input id="input" type="file" /><br />

                <button backgroundColor="dark" >Send To HR Executive</button>
            </form>
        </div>
    )
}
export default Fresher;