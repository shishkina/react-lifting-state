import React, { Component } from 'react';
import QuoteList from './components/QuoteList';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import './index.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      featured: null,
    };
    this.featureQuote = this.featureQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://ada-api.herokuapp.com/api/quotes')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        apiData: res.quotesData,
        apiDataLoaded: true,
      });
    });
  }

  renderQuoteList() {
    if (this.state.apiDataLoaded) {
      return (
        <QuoteList
          apiData={this.state.apiData}
          featured={this.state.featured}
          featureQuote={this.featureQuote}
        />
      );
    } else return (<Loading />);
  }

  featureQuote(id) {
    this.setState({
      featured: id,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.renderQuoteList()}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
