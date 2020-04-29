import React from 'react';
import './BookDetails'

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("https://www.googleapis.com/books/v1/volumes?q=thestand")
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
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