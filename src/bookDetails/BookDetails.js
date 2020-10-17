import React from 'react';
import Card from 'react-bootstrap/Card'
import LinesEllipsis from 'react-lines-ellipsis'
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
                        <Card.Img variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} className="cardImg" />
                        <Card.Body>
                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                            <Card.Text className="description">
                                {book.volumeInfo.description}
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