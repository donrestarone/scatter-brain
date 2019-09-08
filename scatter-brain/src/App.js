
import {getRandomFact} from './Services/getRandomFact'
import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import Slider from './Components/Slider/Slider'
import FactHOC from './Components/HOC/FactHOC/FactHOC'
class App extends Component {
  
  componentWillMount = () => {
    this.initializeDataFeed()
    this.listenForAppClose()
  }

  componentWillReceiveProps = (newProps) => {
    this.checkForSpeedChange(newProps)
  }

  checkForSpeedChange = (newProps) => {
    if (newProps.speedValue !== this.props.speedValue) {
      this.killTimer()
      this.initializeDataFeed(this.translateSpeedValue(newProps.speedValue))
    }
  }

  translateSpeedValue = (speed) => {
    return ((100 - speed) + 1) * 40
  }

  listenForAppClose = (e) => {
    window.addEventListener('beforeunload', () => {
      // to prevent memory leaks
      e.preventDefault()
      this.killTimer()
    })
  }

  killTimer = () => {
    let timerId = this.props.timer
    clearInterval(timerId)
  }

  initializeDataFeed = (interval=2000) => {
    let timer = setInterval(() => {
      getRandomFact().then(response => response.json())
      .then(object => this.props.addNewFact(object))
    }, interval);
    this.props.initializeTimer(timer)
  }



  render() {
    return (
      <>
        <Slider></Slider>
        <FactHOC></FactHOC>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewFact: (data) => dispatch({
      type: 'addFact',
      data
    }),
    initializeTimer: (timer) => dispatch({
      type: 'initTimer',
      data: timer
    }),
  }
}

const mapStateToProps = state => {
  return {
    timer: state.timerId,
    speedValue: state.speed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
