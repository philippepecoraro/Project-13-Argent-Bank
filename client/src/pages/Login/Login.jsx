import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <div>
            <main className="main bg-dark login">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                            >Remember me</label>
                        </div>
                        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Login