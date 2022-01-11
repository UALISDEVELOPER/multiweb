import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Styles
import "./styles/signIn.scss"

//Validation Componenets
import { validate } from './SignInValidate';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Container, Row, Col, Spinner} from 'react-bootstrap';

//images
import signupIllustrations from "./styles/img/Signup.gif"


const SingInForm = ({history}) => {

    const [data , setData]= useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        agreementStatus: false,
        beAbleToSignUp: false,
    })
    //gotten data from client up to here


    const [errors , setErrors] = useState({})
    //catching errors from SignInValdation
    const [touched , setTouched] = useState({})
    //use setTouched to know if client has clicked on any input

    const [serverResponse , setServerResponse] = useState("")
    
    useEffect(()=>{
        setErrors(validate(data));
        //validation 
    },[data])

    useEffect(()=>{
        serverResponse.includes("@") && successed("you signedup successfuly");
        serverResponse.includes("@") && history.replace("/log-in");
    },[serverResponse])


    const valueHandler = event =>{
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }
    //valueHandler fonction helps input to work properly 

    const checkBoxHandler =()=>{
        if(data.agreementStatus=== false){
            setData({...data, agreementStatus: true});
        }else{
            setData({...data, agreementStatus: false});
        }
    }
    //checkBoxHandler helps us to know if client accepted our rule


    const touchedHandler = event =>{
        setTouched({
            ...touched,
            [event.target.name] : true,
        })
    }
    //by using this eventHandler we can know if client has focused on an input
    
    const signUpHandler = (event)=>{
        event.preventDefault();

        setServerResponse("sending data")

        const signUpData ={
            name : data.name,
            email : data.email,
            password : data.password,
        }

        if( !(errors.name || errors.email || errors.password || errors.confirmPassword || errors.agreementError) ){
            axios.post("https://api.freerealapi.com/auth/register", signUpData)
                    .then( response=> response.data.success && setServerResponse(JSON.parse(response.config.data).email))
                    .catch((error)=> setServerResponse( error.response.data.message))
        }else{
            fail("fill out the form")
            setServerResponse("fill out the form")
        }
    }
    //signInHandler will check that if there is no error to send the data to server

    const logOutHnadler = ()=>{
        // localStorage.clear();
        localStorage.removeItem("USEREMAIL2")
    }

    const successed = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const fail =(failMessage)=>toast.error(failMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    //JSX down here
    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                        {serverResponse==="sending data" && 
                            <div className='spinnerDiv'>
                                <Spinner variant="primary" animation="grow" className='spinner' />
                            </div>
                        }
                        <Col md="auto">
                            <div className='imageDiv'>
                                <Image fluid className='image' src={signupIllustrations} alt="log in "/>
                            </div>
                        </Col>
                        <Col md="auto">
                            <div className="signInContainer">
                                    <h1>sign up</h1>
                                    <div  className='formDiv'>
                                        <Row>
                                            <Col sm={6}>
                                                <label>user name :</label>
                                            </Col>
                                            <Col sm={6}>
                                                <Row>
                                                    <input type="text" name="name" value={data.name} onChange={valueHandler} onFocus={touchedHandler}/>
                                                </Row>
                                                <Row>
                                                    <span>{errors.name && touched.name && <p>{errors.name}</p>} </span>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={6}>
                                                <label>email :</label>
                                            </Col>
                                            <Col sm={6}>
                                                <Row>
                                                    <input type="email" name="email" value={data.email} onChange={valueHandler} onFocus={touchedHandler}/>
                                                </Row>
                                                <Row>
                                                    <span>{errors.email && touched.email && <p>{errors.email}</p>} </span>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={6}>
                                                <label>password :</label>
                                            </Col>
                                            <Col sm={6}>
                                                <Row>
                                                    <input type="password" name="password" value={data.password} onChange={valueHandler} onFocus={touchedHandler}/>
                                                </Row>
                                                <Row>
                                                    <span>{errors.password && touched.password && <p>{errors.password}</p>}</span>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={6}>
                                                <label className='confirm'>confirm password :</label>
                                            </Col>
                                            <Col sm={6}>
                                                <Row>
                                                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={valueHandler} onFocus={touchedHandler}/>
                                                </Row>
                                                <Row>
                                                    <span>{errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}</span>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <label>accept terms of privacy :</label>
                                            </Col>
                                            <Col xs={6}>
                                                <Row>
                                                    <input className="checkbox" type="checkbox" name="agreement" value={data.agreement} onClick={checkBoxHandler} onFocus={touchedHandler}/>
                                                </Row>
                                                <Row>
                                                    <span className='agreementSpan'> {errors.agreementError && touched.agreement && <p>{errors.agreementError}</p>}</span>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <button className="signUpBtn" onClick={signUpHandler}>sign up</button>
                                            </Col>
                                            <Col xs={6}>
                                                {serverResponse !== "sending data" && <p className='warning'>{serverResponse}</p>}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={8}>
                                                <p>already have an account?</p>
                                            </Col>
                                            <Col xs={4}>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Link to="/log-in" onClick={logOutHnadler}><button  className="logInBtn">log in</button></Link> 
                                            </Col>
                                            <Col xs={6}>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Link to="/">go to home page</Link>
                                            </Col>
                                            <Col xs={6}>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                        </Col>
                </Row>

            
            {/* react toast down here */}
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
        </Container>
    );
};

export default SingInForm;