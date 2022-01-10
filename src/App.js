import React, {  useState } from 'react';
import { Route , Switch } from "react-router-dom"

//navbar and footer components
import WebNav from './components/WebNav';
import Footer from './components/Footer';

//components
import LogIn from './components/register/LogIn';
import SingInForm from './components/register/SingInForm';
import Crypto from './components/crypto/Crypto';
import Weather from './components/weather/Weather';
import Homepage from './components/homePage/Homepage';

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
        <WebNav/>
        <Switch>
          <Route path="/log-in" render={props => <LogIn setEmail={setEmail} email={email}  {...props}/>} />
          <Route path="/sign-in" component={SingInForm} />
          <Route path="/crypto" component={Crypto} />
          <Route path="/weather" component={Weather}/>
          <Route path="/" component={Homepage}/>
        </Switch>
        <Footer/>
      </div>  
    </div>
  );
};

export default App;