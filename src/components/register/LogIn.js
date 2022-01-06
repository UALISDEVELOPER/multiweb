import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Styles
import "./styles/logIn.scss"

//Validation Components
import { validate } from './LogInValidate';


const LogIn = ({setEmail, email ,history}) => {
    const [clientData, setClientData]= useState({
        email:"",
        password : "",
    });

    const [errors , setErrors] = useState({});
    //catching errors from LogInValdation
    const [touched ,setTouched ] = useState({});
    //use setTouched to know if client has clicked on any input
    const firstInput = useRef();

    // const [userEmail, setUserEmail] = useState(false)

    useEffect(()=>{
        document.title = "website name /log in";
        // setting title of the page
        firstInput.current.focus();
        // focus on first input during componenet mounting
    },[])
    
    useEffect(()=>{
        setErrors(validate(clientData));
        
        //validation 
    },[clientData])

    useEffect(()=>{
        email &&  history.replace("/");
        // email && console.log(email);
        email &&  localStorage.setItem("USEREMAIL2", JSON.stringify(email))
    })
    
    const changeHandler = event =>{
        setClientData({
            ...clientData,
            [event.target.name] : event.target.value,
        })
    };
    //ghangeHandler fonction helps input to work properly 

    const touchHandler = event =>{
        setTouched({
            ...touched,
            [event.target.name] : true,
        })
    }
    //by using this eventHandler we can know if client has focused on an input


    const logInHandler = (event)=>{
        event.preventDefault();
        
        const logInData ={
            email: clientData.email,
            password : clientData.password,
        }

        if( !(errors.email || errors.password ) ){
            axios.post("https://api.freerealapi.com/auth/login", logInData)
                    // .then(response => console.log(response))
                    .then(response=>setEmail(JSON.parse(response.config.data).email))
                    // .catch((error)=>setErrors({...errors, serverError: error.response.data.message}))
                    .catch(error => fail(error.response.data.message))
                    .catch((error)=>console.log(error.response.data.message))
            // console.log("success");
            
        }else{
            // console.log("fail");
            fail("fill out the form");
        }
    }
    //logInHandler will check that if there is no error to send the data to server

    // const successed = () => toast.success('loged in seccussfully', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // });

    const fail =(message)=>toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div className="logInContainer">
            <form>
                <h1>log in</h1>
                <ul>
                    <li>
                        <label>email :</label>
                        <input type="email" name="email" value={clientData.email} onChange={changeHandler} onFocus={touchHandler} ref={firstInput} /><br/>   
                        {errors.email && touched.email && <span>{errors.email}</span>} 
                    </li>   
                    <li>
                        <label>password :</label>
                        <input type="password" name="password" value={clientData.password} onChange={changeHandler} onFocus={touchHandler}/><br/>
                        {errors.password && touched.password && <span>{errors.password}</span>}  
                    </li>
                    {errors.serverError && <span>*{errors.serverError}*</span>}    
                    <li className="buttonLi">
                        <button onClick={logInHandler} className="logInBtn">log in</button>
                        <br/>
                        <br/>
                        <p>don't have an account?</p>
                        <Link to="/sign-in"><button className="signUpBtn">sign up</button></Link> 
                    </li>
                    <li>
                        <Link to="/">go to home page</Link>
                    </li>
                </ul>    
            </form>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
        </div>
    );
};

export default LogIn;