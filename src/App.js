import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(awsconfig);

// "eyJraWQiOiJacnhsNWVrSGc1SEVIOUhqb1RqaXk1WHN1XC9cLzE2SDY0TTUwU0Q5QU82Yzg9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5MGQ1MjFjYS04YWY1LTQxMjctOGU4ZC01YjQzMDM1MzliMTkiLCJldmVudF9pZCI6ImI4ZWFhNjY5LWRlN2EtNDJlMi05YTc0LTZhZTM0MjIwMGI1NCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1Nzk0MjI0NjQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3g2YVpoa28wNSIsImV4cCI6MTU3OTQyNjA2NSwiaWF0IjoxNTc5NDIyNDY1LCJqdGkiOiI0N2U1NTI0MS1hZjNhLTQ5NDItYWQ2Mi1lY2VhNjhiMDJkNzEiLCJjbGllbnRfaWQiOiI2cGlwb3N0bXZwdmVydDhqOTA0aHZhZmUwYiIsInVzZXJuYW1lIjoidGVzdCJ9.Z_c0Y3ZtWwm4jghqxfc3n7RNpZUwGOkZlCMOV744izaJq-DeNTv7rfglFIZ1gWnXLeOcO7P3Dz2aAEqtmkdk3XVRIaMLDAuBuyTmSYzlHHPHDaCxfMEFYUyyLmnxNQ1n_joa_EBCPxMOom9U83PUsdZtOqcL19XNa07-3QK-FTkT9TK01nlFVCh25nMl8jfko7uEJSwEJxDjJVcZqpJc9CPayA1lbXprk6JIY3BL28PvRyyD353_xxaDn27k-88uJW24k29ZkX5qfd44SP8BJU2wS-boccIsoLHNIbnlI2rRRUqjl_N5ymfwTc0Opp_dRodNQlQ7M9fmbvqwOKr9zw"

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);
