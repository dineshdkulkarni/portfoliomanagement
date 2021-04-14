import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
class Menu extends Component {

    constructor() {
        super()
        const menu = { "overview": true, "banking": true, "investing": true, "planning": true, "advice": true, }
    }
    render() {
        return (
            <div className="header">
                <Nav className="mr-auto">
                <Nav.Link exact href="/"> Overview</Nav.Link>
                <Nav.Link href="/banking">Banking</Nav.Link>
                <Nav.Link href="/investing">Inventing</Nav.Link>
                <Nav.Link href="/planning">Planning</Nav.Link>
                <Nav.Link href="/advice">Advice</Nav.Link>
                </Nav>
            </div>
        );
    }
}
export default Menu;