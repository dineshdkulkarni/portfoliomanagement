import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
class Menu extends Component {

    constructor() {
        super()
        const menu = { "overview": true, "banking": false, "investing": true, "planning": false, "advice": false, }
    }
    render() {
        return (
            <div className="header">
                <Nav className="mr-auto">
                {this.menu && this.menu.overview === true ? (<Nav.Link href="/"> Overview</Nav.Link>) : ""}
                {this.menu && this.menu.banking === true ? (<Nav.Link href="/transfers">Banking</Nav.Link>):""}
                {this.menu && this.menu.investing === true ? (<Nav.Link href="/billpay">Inventing</Nav.Link>):""}
                {this.menu && this.menu.planning === true ? (<Nav.Link href="/billpay">Planning</Nav.Link>) :""}
                {this.menu && this.menu.advicec === true ?<Nav.Link href="/billpay">Advice</Nav.Link> : ""}
                </Nav>
            </div>
        );
    }
}
export default Menu;