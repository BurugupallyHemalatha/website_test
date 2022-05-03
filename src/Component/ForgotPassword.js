import React from 'react'
const ForgotPassword = () => {
    return (
        <div>
            <center>
                <div className='card' style={{ width: "50%",marginTop:"80px" }} >

                    <h1 style={{color:"gray"}}>Reset Your Password</h1>
                    <div className=''>
                        <h3>Enter your user account's verified email address and we will send you a password reset link.</h3>
                        <input type="email" placeholder='Enter Your Email Address' /><br/><br/>
                        <button className='btn btn-primary'>Send OTP </button>
                    </div>

                </div>
                </center >
        </div>
      
    )
}
export default ForgotPassword;