import React from 'react';
import Quote from './Quote';

const QuoteList = props => {
  return (
    <div className="quotelist">
      {props.apiData.map(quote => {
        return <Quote quote={quote} key={quote.id} />;
      })}
    </div>
  );
};

export default QuoteList;
