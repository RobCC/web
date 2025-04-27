import {
  Route,
  Navigate,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from '#/components/App/App';
import { Content } from '#/views';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router: any = createHashRouter([
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
