import React from 'react';
import Form from 'react-bootstrap/Form';


class SearchBar extends React.Component {

    searchInputChanged(value) {
        //TODO: use Lodash's debounce and call props.searchBook()
    }
    
    render() {
        return (
            <Form>
                <Form.Group controlId="formSearch">
                    <Form.Control type="text" placeholder="Search book" onChange="searchInputChanged(value)"/>
                </Form.Group>
            </Form>
        )
    }
}

export default SearchBar;