import React, { Component } from 'react'
import Menu from '../menu'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headerLabel">
                    Portfolio Management
                </div>
                <Menu></Menu>
            </div>
        );
    }
}
export default Header;
