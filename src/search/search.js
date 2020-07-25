import React from 'react';
import Form from 'react-bootstrap/Form';

class SearchBar extends React.Component {
    
    render() {
        return (
            <Form>
                <Form.Group controlId="formSearch">
                    <Form.Control type="text" placeholder="Search book" onChange="this.props.onChange(value)"/>
                </Form.Group>
            </Form>
        )
    }
}

export default SearchBar;