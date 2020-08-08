import React from 'react';
import './BookDetails'

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        if(this.props.books) {
            this.props.books.map((book, index) => {
                return (
                <li key={index}>test</li>
                    // <aside className="bookDetails">
                        
                    // </aside>
                )
            });
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default BookDetails;