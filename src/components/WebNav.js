import React from 'react';

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
        localStorage.clear();
    }


    return (
        <div>
            <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand className='navBrand' href="/">Multi web</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className='pagesLink' href="/">Home</Nav.Link>
                <Nav.Link className='pagesLink' href="/crypto">Crypto</Nav.Link>
                <Nav.Link className='pagesLink' href="/weather">Weather</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
                <Nav.Link href="/sign-in">
                    {JSON.parse(localStorage.getItem("USEREMAIL2")) ?
                    <div className='registerDiv'>
                        <img src={logOutIcon} alt="logout icon"/>
                        <p onClick={logOutHnadler} className='logOutBtn'>log out</p> 
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