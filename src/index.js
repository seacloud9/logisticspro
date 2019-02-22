import 'babel-polyfill'
// import devToolsEnhancer from 'remote-redux-devtools'
import { BreakpointsProvider } from 'react-with-breakpoints'
import PageTransition from 'react-router-page-transition'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './containers/style/applicationStyle'
import HomContainer from './containers/HomeContainer'
// import WordpressFlipContainer from './containers/WordpressFlipContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import appSagas from './sagas'
export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const historyMiddleware = routerMiddleware(history)
let middleware = [historyMiddleware, sagaMiddleware]
export const store = createStore(reducer, applyMiddleware(...middleware))
sagaMiddleware.run(appSagas)
const breakpoints = {
  small: 468,
  medium: 768,
  large: 1024
}
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = props
  }
  render () {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <PageTransition timeout={500}>
              <Switch location={location}>
                <ConnectedRouter history={history}>
                  <MuiThemeProvider theme={Theme}>
                    <div>
                      <Route exact path='/' component={HomContainer} />
                    </div>
                  </MuiThemeProvider>
                </ConnectedRouter>
              </Switch>
            </PageTransition>
          )}
        />
      </Router>
    )
  }
}
ReactDOM.render(<Provider store={store}><BreakpointsProvider breakpoints={breakpoints}><App /></BreakpointsProvider></Provider>, document.querySelector('#sc9Port'))
