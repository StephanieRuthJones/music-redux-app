//group 3rd party dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//group own code: 
import App from './components/App'
import reducers from './reducers'

//need provider tag at top of component hierarchy
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
)