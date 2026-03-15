import {
  Route,
  Navigate,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router';

import App from '#/components/App/App';
import { Content } from '#/views';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/README.md" replace />} />
        <Route path="/:fileFullPath" element={<Content />} />,
      </>,
    ),
  },
]);

export default router;
