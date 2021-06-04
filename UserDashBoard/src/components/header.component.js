import React, {Component} from 'react'
import {
    Navbar,
    Form,
    Button,
    Nav,
    Col,

} from "react-bootstrap";


class Header extends Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/"> RAILWAY SYSTEM</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href = "/alltrain">See Trains</Nav.Link>
                        <Nav.Link href="/allstation">See Station</Nav.Link>
                        {/* <Nav.Link href="booking">Book</Nav.Link>
                        <Nav.Link href="find-train">Find Train</Nav.Link> */}
                    </Nav>
                    <Form inline>
                        <Col>
                            <Button variant="primary" onClick = {this.setRedirect}>
                                Log In
                        </Button>
                        </Col>
                        <Button variant="primary">
                            Register
                        </Button>
                    </Form>
                </Navbar>
            </>
        )
    }
}


export default Header;