// react imports
import { BrowserRouter as Router } from 'react-router-dom';

// apollo imports
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';

// AWS related imports
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

// styles
import '@aws-amplify/ui-react/styles.css';
import './global.css';

// routes
import AllRoutes from './AllRoutes';

// Configure Amplify
Amplify.configure(awsExports);

// Configure Appollo
const httpLink = createHttpLink({
  uri: awsExports.aws_appsync_graphqlEndpoint
});

const authLink = setContext(async (_, { headers }) => {
  const apiKey = awsExports.aws_appsync_apiKey;
  return {
    headers: {
      ...headers,
      'x-api-key': apiKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AllRoutes />
      </Router>
    </ApolloProvider>
  );
}

export default withAuthenticator(App);
