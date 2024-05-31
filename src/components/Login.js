import React, { useState } from 'react';
import '../styles/LogSign.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({username:"", password:""});
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            
        const response = await fetch('http://localhost:5000/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username:credentials.username, password:credentials.password})
          });


          if (!response.ok) {
            throw new Error('Network response was not ok');
        }
          const json = await response.json();
          console.log("Response JSON:", json); // Log JSON response
          
          if (json.success) {
            // save the auth token redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Login Successfully", "Success")  
            navigate("/");
          }      
          else{
            props.showAlert("Check Your username or Password", "Error")
        }
    } catch (error) {
        console.error('There was a problem with the login request:', error);
        props.showAlert("An error occurred. Please try again.", "error");
    }

}

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='container'>
            <div className="login-container">
                    <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="username" id="username" name="username" value={credentials.username} onChange={onChange} aria-describedby='usernameHelp' required autoComplete="username"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} required autoComplete="current-password" />
                    </div>
                    <button className='login-button' type="submit">Login</button>
                </form>
                <p className="signup-link">Don't have an account? <Link to="/register">Register</Link></p>
            </div>    
        </div>
    )
}

export default Login
