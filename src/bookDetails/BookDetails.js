import React from 'react';
import './BookDetails'

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <aside className="bookDetails">
                <p>Book details</p>
            </aside>
        )
    }
}

export default BookDetails;