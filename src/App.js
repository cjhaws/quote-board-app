import React, { Component } from 'react';
import QuoteList from './components/QuoteList';
import QuoteBox from './components/QuoteBox';
import firebase from 'firebase';

class App extends Component {

    constructor(props){
        super(props);
        var config = {
            apiKey: "AIzaSyC8VtRSlT-H_qCBvXXQp-mrUbR04scmvD8",
            authDomain: "quote-board-app.firebaseapp.com",
            databaseURL: "https://quote-board-app.firebaseio.com",
            projectId: "quote-board-app",
            storageBucket: "",
            messagingSenderId: "396739333467"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <QuoteList db={firebase} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <QuoteBox db={firebase} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
