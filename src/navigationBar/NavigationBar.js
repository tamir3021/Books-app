import React from 'react';
import './NavigationBar'
import './NavigationBar.scss';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import SearchBar from '../search/Search';



function NavigationBar(props) {
    return (
        <div className="navigationBar">
            <SearchBar searchQuery={props.searchQuery} onChange={props.onChange}/>
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link as={Link} to="/">Book Details</Nav.Link>
                <Nav.Link as={Link} to="/test">Test</Nav.Link>
            </Nav>
        </div>
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