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
            const booksList = this.props.books.map((book, index) => {
                return (
                <li key={index}>test</li>
                    // <aside className="bookDetails">
                        
                    // </aside>
                );
            });
            return (
                <div>
                    <ul>
                        {booksList}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default BookDetails;