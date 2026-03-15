import { Router, Route, Redirect } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';

import App from '#/components/App/App';
import { Content } from '#/views';

export default function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <App>
        <Route path="/" component={() => <Redirect to="/README.md" />} />
        <Route path="/:fileFullPath" component={Content} />
      </App>
    </Router>
  );
}
