import "babel-polyfill"
import { composeWithDevTools } from 'redux-devtools-extension'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware ,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware() 
const store = createStore(reducer,compose(
  applyMiddleware(sagaMiddleware),
  composeWithDevTools()
))
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')} 
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
