import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Todos from './components/todos'
import { browserHistory, Router, Route } from 'react-router';

class Routes extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={ browserHistory }>
					<Route path="/" component={Todos}>
						<Route path="*" component={Todos}/>
					</Route>
				</Router>
			</Provider>
		);
	}
}

export default Routes;