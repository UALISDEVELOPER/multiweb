import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

//styles
import "./nav.scss"

const Navbar = () => {
    
    const logOutHnadler = ()=>{
        localStorage.clear();
    }

    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/" className='nav'>
                <Nav.Item >
                    <Nav.Link className='navLink' href="/crypto">Crypto</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navLink' href="/weather">Weather</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navLink' href="/sign-in">
                        {JSON.parse(localStorage.getItem("USEREMAIL2")) ?<p onClick={logOutHnadler} className='logOutBtn' >log out</p> :<p>sign in/ log in</p>}
                    </Nav.Link>
                    {JSON.parse(localStorage.getItem("USEREMAIL2")) && <p className='userEmail'>{JSON.parse(localStorage.getItem("USEREMAIL2"))}</p>}   
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar;