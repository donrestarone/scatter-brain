import React from 'react';
import './Fact.css'

const Fact = (props) => {
  return (
    <p className="fact">{props.fact}</p>
  )
}

export default Fact;