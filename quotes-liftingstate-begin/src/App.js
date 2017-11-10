import React, { Component } from 'react';
import QuoteList from './components/QuoteList';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://ada-api.herokuapp.com/api/quotes')
    .then(res => res.json())
    .then(res => {
      this.setState({
        apiData: res.quotesData,
        apiDataLoaded: true,
      });
    });
  }

  renderQuoteList() {
    if (this.state.apiDataLoaded) {
      return <QuoteList apiData={this.state.apiData} />;
    } else return <p>Loading</p>;
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
