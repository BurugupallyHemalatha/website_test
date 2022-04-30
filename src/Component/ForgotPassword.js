import React from 'react'
const ForgotPassword = () => {
    return (
        <div >
            <h1>Reset Your Password</h1>
            <div className='card'>
                <h3>Enter your user account's verified email address and we will send you a password reset link.</h3>
                <input type="email" placeholder='Enter Your Email Address'/>
            </div>
        </div>
    )
}
export default ForgotPassword;