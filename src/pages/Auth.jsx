import React, { useState } from 'react';
import '../styles/auth.css';
import googlelogo from '../assets/google-logo.png';
import applelogo from '../assets/Apple-Logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [state, setState] = useState('signup'); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const nav= useNavigate()
  // Signup function
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/api/signup', {
        name,
        email,
        password,
      });
      const { status } = response.data;
      if (status === 'success') {
        alert('Successfully created account');
        setState('signin'); 
        event.target.reset();
        nav('/')
      } else {
        alert('Failed to create account');
      }
    } catch (error) {
      console.error('Error during sign up:', error.message);
    }
  };

 
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/api/signin', {
        email,
        password,
      });
      const { status } = response.data;
      if (status === 'success') {
        alert('Successfully logged in');
        event.target.reset();
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const handleAuth = (event) => {
    if (state === 'signup') {
      handleSignup(event);
    } else {
      handleLogin(event);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <p className="sign-in-title">
          {state === 'signup' ? 'Sign up' : 'Sign in'}
        </p>
        <form onSubmit={handleAuth}>
          <div className="input-box">
            {state === 'signup' && (
              <>
                <label htmlFor="name">Name</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="login-input"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </>
            )}
            <label htmlFor="email">Email address</label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="login-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="login-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {state === 'signup' && (
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" />
              <p className="checkbox-title">I agree to the terms & policy</p>
            </div>
          )}
          <button className="signup-button">
            {state === 'signup' ? 'Sign up' : 'Sign in'}
          </button>
        </form>

        <div className="or-container">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <div className="buttons">
          <div className="google-button-container">
            <img src={googlelogo} alt="" className="google-logo" />
            <button className="sign-in-google">Sign in with Google</button>
          </div>
          <div className="apple-button-container">
            <img src={applelogo} alt="" className="google-logo" />
            <button className="sign-in-apple">Sign in with Apple</button>
          </div>
        </div>
        <div className="footer-title">
          <p>
            {state === 'signup'
              ? 'Have an account? '
              : "Don't have an account? "}
            <span
              onClick={() => setState(state === 'signup' ? 'signin' : 'signup')}
            >
              {state === 'signup' ? 'Sign in' : 'Sign up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
