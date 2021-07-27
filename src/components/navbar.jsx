import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav>
                <i className="navbar-logo fas fa-leaf"></i>
                <h1 className="title">Habit tracker</h1>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;