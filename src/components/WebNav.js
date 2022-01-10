import React from 'react';
import { Link } from 'react-router-dom';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav,Navbar} from 'react-bootstrap';

//styles
import "./nav.scss"

//images
import userIcon from "./img/userIcon/1x/user.png";
import logOutIcon from "./img/logoutIcon/1x/logout.png";
import singInIcon from "./img/signinIcon/1x/signin.png"

const WebNav = () => {

    const logOutHnadler = ()=>{
        // localStorage.clear();
        localStorage.removeItem("USEREMAIL2")
    }


    return (
        <div>
            {/* <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand className='navBrand'><Link to="/">Multi web</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='pagesLink' href="#x"><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link className='pagesLink' href="#x"><Link to="/crypto">Crypto</Link></Nav.Link>
                            <Nav.Link className='pagesLink' href="#x"><Link to="/weather">Weather</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#x">
                                <Link to="/sign-in">
                                    {JSON.parse(localStorage.getItem("USEREMAIL2")) ?
                                    <div className='registerDiv' onClick={logOutHnadler}>
                                        <img src={logOutIcon} alt="logout icon"/>
                                        <p className='logOutBtn'>log out</p> 
                                    </div>
                                    :
                                    <div className='registerDiv'>
                                        <img src={singInIcon} alt="sign in icon"/>
                                        <p>sign in/ log in</p>
                                    </div>
                                    }
                                </Link>
                            </Nav.Link>
                            {JSON.parse(localStorage.getItem("USEREMAIL2")) &&
                                <Nav.Link className='userLink'>
                                    <div className='userDiv'>
                                        <img src={userIcon} alt="userIcon"/>
                                        <p className='userEmail'>{JSON.parse(localStorage.getItem("USEREMAIL2"))}</p>
                                    </div>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>             */}
            <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand className='navBrand'><Link to="/">Multi web</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='pagesLink' as={Link}  to="/">Home</Nav.Link>
                            <Nav.Link className='pagesLink' as={Link}  to="/crypto">Crypto</Nav.Link>
                            <Nav.Link className='pagesLink' as={Link}  to="/weather">Weather</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link}  to="/sign-in">
                                    {JSON.parse(localStorage.getItem("USEREMAIL2")) ?
                                    <div className='registerDiv' onClick={logOutHnadler}>
                                        <img src={logOutIcon} alt="logout icon"/>
                                        <p className='logOutBtn'>log out</p> 
                                    </div>
                                    :
                                    <div className='registerDiv'>
                                        <img src={singInIcon} alt="sign in icon"/>
                                        <p>sign in/ log in</p>
                                    </div>
                                    }
                            </Nav.Link>
                            {JSON.parse(localStorage.getItem("USEREMAIL2")) &&
                                <Nav.Link className='userLink'>
                                    <div className='userDiv'>
                                        <img src={userIcon} alt="userIcon"/>
                                        <p className='userEmail'>{JSON.parse(localStorage.getItem("USEREMAIL2"))}</p>
                                    </div>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </div>
    );
};

export default WebNav;