// react imports
import { BrowserRouter as Router } from 'react-router-dom';

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
Amplify.configure(awsExports)

function App() {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

export default withAuthenticator(App);
