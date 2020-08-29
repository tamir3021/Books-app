import React from 'react';
import Card from 'react-bootstrap/Card'
import './BookDetails.scss';
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
                <li key={index}>
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </li>
                    // <aside className="bookDetails">
                        
                    // </aside>
                );
            });
            return (
                <div>
                    <ul className="booksList">
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