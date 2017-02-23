import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Import styles for the Porto web template.
import '../styles/vendor/bootstrap/css/bootstrap.min.css';
import '../styles/vendor/font-awesome/css/font-awesome.min.css';
import '../styles/vendor/animate/animate.min.css';
import '../styles/vendor/simple-line-icons/css/simple-line-icons.min.css';
import '../styles/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../styles/vendor/owl.carousel/assets/owl.theme.default.min.css';
import '../styles/vendor/magnific-popup/magnific-popup.min.css';
import '../styles/css/theme.css';
import '../styles/css/theme-elements.css';
import '../styles/css/theme-blog.css';
import '../styles/css/theme-shop.css';
import '../styles/vendor/rs-plugin/css/settings.css';
import '../styles/vendor/rs-plugin/css/layers.css';
import '../styles/vendor/rs-plugin/css/navigation.css';
import '../styles/css/skins/default.css';
import '../styles/css/skins/skin-corporate-7.css';
import '../styles/css/custom.css';

import App from './components/App';
import Home from './components/views/Home/Home';
import NotFound from './components/views/NotFound/NotFound';
import RootReducer from './reducers/root';

export const store = createStore(RootReducer);

ReactDOM.render(
(<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
</Provider>),
document.getElementById('root'));
