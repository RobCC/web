import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App/App';
import store from './store/store';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
