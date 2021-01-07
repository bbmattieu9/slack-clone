import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

function Login() {
    return <div className='login'>
            <div className="login__container">

                <img 
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp" 
                    alt="slack logo img"/>

                    <h1>Sign in to fake Slack HQ</h1>
                    <p>babatoondayMattieu.slack.com</p>
                    <Button>Sign in with Google</Button>
            </div>
        </div>;
}

export default Login
