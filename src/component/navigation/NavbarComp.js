import React, { Component } from "react";
<<<<<<< HEAD
import { Navbar, Nav, Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
=======
import {Navbar, Nav, Container} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link
} from "react-router-dom"
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
import About from "../../pages/About";
import Home from "../../pages/Home";
import TodoPage from "../../pages/TodoPage";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
<<<<<<< HEAD
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container>
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/"}>
                                        {" "}
                                        Home{" "}
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={"/about"}>
                                        About
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={"/TodoPage"}>
                                        TodoPage
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/TodoPage" element={<TodoPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
=======
            <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}> Home </Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link as={Link} to={"/TodoPage"}>TodoPage</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/TodoPage" element={<TodoPage/>}/>
                </Routes>
            </div>
            </Router>
        )
    }
}
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
