import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import store, { history } from './Store'

const Nothing = () => (
  <div>
    <h1>Hello, world.</h1>
  </div>
)

class Root extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <ConnectedRouter history={history}>
            <React.Fragment>
              <Route exact path="/" component={Nothing} />
            </React.Fragment>
          </ConnectedRouter>
        </React.Fragment>
      </Provider>
    )
  }
}

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app'),
)
