import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithPopup(provider)
        .then((result) => {
          
        //   const credential = result.credential;
    
        }).catch((error) => {
          console.log('[Auth Error]:', error.message);
        });
    }

    return <div className='login'>
            <div className="login__container">
                <img 
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp" 
                    alt="slack logo img"/>

                    <h1>Sign in to fake Slack HQ</h1>
                    <p>babatoondayMattieu.slack.com</p>
                    <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>;
}

export default Login
