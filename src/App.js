import React, {  useState } from 'react';
import { Route , Switch } from "react-router-dom"


//components
import Landing from './components/Landing';
import LogIn from './components/register/LogIn';
import SingInForm from './components/register/SingInForm';

//styles
import "./app.scss"

const App = () => {

  return (
    <div >
      <Switch>
        <Route path="/log-in" component={LogIn}/>
        <Route path="/sign-in" component={SingInForm} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
};

export default App;