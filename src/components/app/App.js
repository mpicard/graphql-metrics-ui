import './App.css';

import PropTypes from 'prop-types';
import React from 'react';

import history from '../../history';
import routes from '../../routes';
import NotFound from '../pages/NotFound';
import Sidebar from '../sidebar/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: props.pathname
    };
  }

  static propTypes = {
    pathname: PropTypes.oneOf(Object.keys(routes)).isRequired
  };

  componentDidMount() {
    history.onChange(pathname => this.setState({ pathname }));
  }

  render() {
    const { pathname } = this.state;
    const Outlet = routes[pathname] || NotFound;

    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">GraphQL Metrics</h1>
        </header>
        <Sidebar />
        <Outlet />
      </div>
    );
  }
}

export default App;
