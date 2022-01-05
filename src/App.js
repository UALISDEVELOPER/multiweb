import React, {  useState } from 'react';
import {Route , Switch } from "react-router-dom"


//components
import Landing from './components/Landing';
import LogIn from './components/register/LogIn';
import SingInForm from './components/register/SingInForm';

//styles
import "./app.scss"

const App = () => {
  const [email , setEmail]= useState("");

  // const [localStorageEmail , setLocalStorageEmail] = useState("")
  // const userEmail = localStorage.setItem("USEREMAIL", JSON.stringify(email));
  // const userParsedEmail= JSON.parse( localStorage.getItem("USEREMAIL"));


  return (
    <div >
      <div>
        <Switch>
          <Route path="/log-in" render={props => <LogIn setEmail={setEmail} email={email}  {...props}/>} />
          <Route path="/sign-in" component={SingInForm} />
          <Route path="/" render={props => <Landing {...props}/>}/>
        </Switch>
      </div>  
    </div>
  );
};

export default App;