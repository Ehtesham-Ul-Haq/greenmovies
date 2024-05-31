import React, { useState } from 'react';
import '../styles/LogSign.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = (props) => {

  const [credentials, setCredentials] = useState({name:"", username:"", password:""});
  let navigate = useNavigate();

  const handleSubmit = async (e)=>{
      e.preventDefault();
      const response = await fetch('http://localhost:5000/auth/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name:credentials.name, username:credentials.username, password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          // save the auth token redirect
          localStorage.setItem('token', json.authtoken);
          props.showAlert("Your Account Created Successfully", "Success")
          navigate("/");
        }      
        else{
          props.showAlert("User Already Exists", "Error")
        }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
    <div className='container'>
    <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={onChange} required autoComplete="name"/>
            </div>

            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="username" id="username" name="username" onChange={onChange} aria-describedby='usernameHelp' required autoComplete="username"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={onChange} minLength={5} required autoComplete="current-password" />
            </div>
            <button className='signup-button' type="submit">Register</button>
        </form>
        <p className="login-link">Already have an Account? <Link to="/login">Login</Link></p>
    </div>    
</div>
)
}

export default Register;
