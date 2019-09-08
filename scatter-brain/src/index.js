import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {reducer} from './Store/Reducers/Reducer'
import { Observable } from 'rxjs'

const store = createStore(reducer);

function getState$(store) {
  return new Observable(function (observer) {
    // emit the current state as first value:
    observer.next(store.getState());
    const unsubscribe = store.subscribe(function () {
      // emit on every new state changes
      observer.next(store.getState());
    });
    // let's return the function that will be called
    // when the Observable is unsubscribed
    return unsubscribe;
  });
}

window.addEventListener('beforeunload', () => {
  // to prevent memory leaks
  subscription.unsubscribe()
}) 

let observer = {
  next: (state) => {
    // broadcast this for analytics or something, saying that the fact was shown
    console.log(state)
  }
}

let subscription = getState$(store)
subscription.subscribe(observer)

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
