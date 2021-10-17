import React, { Component } from 'react';
import constants from '../constants';
import { Helmet } from 'react-helmet';

let TITLE = "FWC-SD - ";

class TextFile extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: [],
        };
    }

    NewlineText(data) {
        const text = data.text + '';
        const newText = text.split('\n').map(str => <p>{str}</p>);
        
        return newText;
      }
      

    componentDidMount() {
        let url = constants.BASE_URL;
        if(this.props.page === "dgo") {
            url += constants.DIEGOGARCIAOP;
            TITLE += constants.TITLE_DGO;
        } else if (this.props.page === "ag") {
            url += constants.ARABIANGULF;
            TITLE += constants.TITLE_AG;
        } else if (this.props.page === "as") {
            url += constants.ARABIANSEAS;
            TITLE += constants.TITLE_AS;
        } else if (this.props.page === "rs") {
            url += constants.REDSEA;
            TITLE += constants.TITLE_RS;
        }

        fetch(url)
            .then(response => response.text())
            .then(content => this.setState({ data: content }));
    }
    
    render() {
        return (
            <div className="boxedText">
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
                <this.NewlineText text={this.state.data} />
            </div>
        );
    }
}

export default TextFile;