import React, {Component} from 'react';
import trim from 'trim';

class QuoteBox extends Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
            quote: ''
        };
    }
    onChange(e){
        this.setState({
            quote: e.target.value
        });
    }
    onKeyup(e){
        if(e.keyCode === 13 && trim(e.target.value) !== ''){
            e.preventDefault();
            let dbCon = this.props.db.database().ref('/quotes');
            dbCon.push({
                quote: trim(e.target.value)
            });
            this.setState({
                quote: ''
            });
        }
    }
    render() {
        return (
            <form>
        <textarea
            className="textarea"
            placeholder="Type a message"
            cols="100"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.quote}>
          </textarea>
            </form>
        )
    }
}

export default QuoteBox;
