import React from 'react';
import Form from 'react-bootstrap/Form';

class SearchBar extends React.Component {
    
    render() {
        return (
            <Form>
                <Form.Group controlId="formSearch">
                    <Form.Control type="text" placeholder="Search book"
                     value={this.props.searchQuery}
                     onChange={(event) => this.props.onChange(event.target.value)}/>
                </Form.Group>
            </Form>
        )
    }
}

export default SearchBar;