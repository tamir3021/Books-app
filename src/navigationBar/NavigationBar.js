import React from 'react';
import './NavigationBar'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function NavigationBar() {
    return (
        <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link as={Link} to="/">Book Details</Nav.Link>
            <Nav.Link as={Link} to="/test">Test</Nav.Link>
        </Nav>
        // <aside className="navigationBar">
        //     <ul>
        //         <li>
        //             <Link to="/">Book Details</Link>
        //         </li>
        //         <li>
        //             <Link to="/test">Test</Link>
        //         </li>
        //     </ul>
        // </aside>
    )
}

export default NavigationBar;