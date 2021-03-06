import React, { Component } from 'react';
import NewSingle from './NewSingle';
import axios from 'axios';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }


    componentDidMount() {
        axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2020-07-01&sortBy=publishedAt&apiKey=${process.env.REACT_APP_BITCOIN_API_KEY}`)
            .then(res => this.setState({
                news: res.data.articles
        }))
      }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} /> 
        ))
    }


    render() {
        return (
            <div className="row">

            {this.renderItems()}
                
            </div>
        )
    }
}

export default News;