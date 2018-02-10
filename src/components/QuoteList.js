import React, {Component} from 'react';
import Quote from './Quote';
import _ from 'lodash';

class QuoteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes: []
        };
        let app = this.props.db.database().ref('quotes');
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });
    }

    getData(values){
        let quotesVal = values;
        let quotes = _(quotesVal)
            .keys()
            .map(quoteKey => {
                let cloned = _.clone(quotesVal[quoteKey]);
                cloned.key = quoteKey;
                return cloned;
            })
            .value();
        this.setState({
            quotes: quotes
        });
    }

    render() {
        let quoteNodes = this.state.quotes.map((quote) => {
            return (
                <div className="card">
                    <div className="card-content">
                        <Quote quote = {quote.quote} />
                    </div>
                </div>
            )
        });
        return (
            <div>
                {quoteNodes}
            </div>
        );
    }
}

export default QuoteList;