import 'regenerator-runtime/runtime';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

import './index.scss';

createRoot(document.getElementById('root')).render(<App />);
