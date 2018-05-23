import './styles';

import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

const uri = process.env.GRAPHQL_URI || 'http://localhost:8000/graphql';
console.log(process.env, uri);

const client = new ApolloClient({ uri });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App pathname={window.location.pathname} />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
