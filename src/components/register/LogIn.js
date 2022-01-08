import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

//react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Styles
import "./styles/logIn.scss"

//Validation Components
import { validate } from './LogInValidate';

//images
import loginIllustrations from "./styles/img/login.gif"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Container, Row, Col} from 'react-bootstrap';


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
        // document.title = "website name /log in";
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
        <Container fluid="md">
                <Row className="justify-content-md-center">
                        <Col md="auto">
                            <div className='imageDiv'>
                                <Image fluid className='image' src={loginIllustrations} alt="log in "/>
                            </div>
                        </Col>
                        <Col md="auto">
                                <div className="logInContainer">
                                    <div>
                                        <form>
                                            <h1>log in</h1>
                                            <div  className='formDiv'>
                                                <Row>
                                                    <Col sm={6}>
                                                        <label>email :</label>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Row>
                                                            <input type="email" name="email" value={clientData.email} onChange={changeHandler} onFocus={touchHandler} ref={firstInput} />
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
                                                            <input type="password" name="password" value={clientData.password} onChange={changeHandler} onFocus={touchHandler}/>
                                                        </Row>
                                                        <Row>
                                                            <span>{errors.password && touched.password && <p>{errors.password}</p>} </span>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={6}>
                                                        <button onClick={logInHandler} className="logInBtn">log in</button>
                                                    </Col>
                                                    <Col xs={6}>

                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={8}>
                                                        <p>don't have an account?</p>
                                                    </Col>
                                                    <Col xs={4}>

                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={6}>
                                                        <Link to="/sign-in"><button className="signUpBtn">sign up</button></Link> 
                                                    </Col>
                                                    <Col xs={6}>

                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={8}>
                                                        <Link to="/">go to home page</Link>
                                                    </Col>
                                                    <Col xs={4}>
                                                        
                                                    </Col>
                                                </Row>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                        </Col>
                </Row>
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

export default LogIn;