import React from 'react';
import Fact from '../../Fact/Fact'
import { connect } from 'react-redux'
const FactHOC = (props) => {
  const latestFact = () => {
    let index = props.facts.length > 0 ? props.facts.length -1 : false
    if (props.facts.length > 0) {
      return props.facts[index].text
    }
  }
  return (
    <div>
      <Fact fact={latestFact()}></Fact>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    facts: state.facts,
  }
}
export default connect(mapStateToProps, null)(FactHOC);