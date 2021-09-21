import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignupForm from '../../Components/SignupForm/SignupForm'

const Auth = () => {
    return (
        <div>
            <h1>Auth</h1>
            <SignupForm/>
            <LoginForm/>
        </div>
    )
}

export default Auth
