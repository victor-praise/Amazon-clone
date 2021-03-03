import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import '../styles.scss/login.scss'

export function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory();
    const submitForm = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            auth => {
                history.push('/')
            } 
        ).catch(
            error => {
                alert(error)
            }
        )
    }
    const registerUser = () => {
        auth.createUserWithEmailAndPassword(email, password).then(
            (auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            }
        ).catch(
            error => {
                alert(error)
            }
        )
    }
    return (
        <>
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png' alt='' />
                </Link>
                <div className="login__container">
                    <h1>Sign-in</h1>
                    <form onSubmit={submitForm}>
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        } />
                        <h5>Password</h5>
                        <input type="Password" value={password} onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        } />
                        <button className="login__signInButton">Sign In</button>
                    </form>
                    <p>
                        By signing-in you agree to the Amazon Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, Our Cookies Notice and our Interest-Based Ads Notice
    </p>
                    <button className="login__registerButton" onClick={registerUser}>Create your Amazon Account</button>
                </div>
            </div>
        </>
    )
}
