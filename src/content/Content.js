import React from 'react';
import './Content.scss'
import { Switch, Route } from 'react-router-dom';
import BookDetails from '../bookDetails/BookDetails'
import Test from '../Test';
function Content(props) {
    return (
        <main className="mainArea">
            <Switch>
                <Route exact path="/">
                    <BookDetails books={props.books}/>
                </Route>
                <Route path="/test">
                    <Test />
                </Route>
            </Switch>
        </main>
    )
}

export default Content;