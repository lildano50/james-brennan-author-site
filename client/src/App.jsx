
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import './App.css'

// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

function App() {
  useEffect(() => {
    document.title = "Author James Brennan";
  }, []);

  return (
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
  );
}

export default App;
