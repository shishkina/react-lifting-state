import React, { Component } from 'react';

const Quote = props => {
  return (
    <div className="my-quote">
      <div className="featureme">
        <i className="fa fa-star fa-2x" />
      </div>
      <h3>
        {props.quote.content}
      </h3>
      <div className="meta">
        <span className="author">
          {props.quote.author}
        </span>
        <span className="genre">
          {props.quote.genre_type}
        </span>
      </div>
    </div>
  );
};

export default Quote;
