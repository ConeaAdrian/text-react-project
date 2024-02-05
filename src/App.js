// App.js
import React from 'react';
import NewsList from './components/NewsList/NewsList';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://point.md/graphql',
});

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <NewsList />
      </div>
    </ApolloProvider>
  );
}

export default App;