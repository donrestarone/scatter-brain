import React from 'react';
import { connect } from 'react-redux'

const Slider = (props) => {
  return (
  <div class="slidecontainer">
    <input type="range" min="1" max="100" value={props.speedValue} class="slider" onChange={props.alterSpeed}/>
  </div>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    alterSpeed: (e) => dispatch({
      type: 'changeSpeed',
      data: e.target.value
    })
  }
}

const mapStateToProps = state => {
  return {
    speedValue: state.speed
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider);