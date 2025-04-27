import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';

import './global.css';

createRoot(document.getElementById('root')!).render(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <RouterProvider router={router} />,
);

// {
//   "include": ["src/**/*", "types/*"],
//   "compilerOptions": {
//     "outDir": "build",
//     "baseUrl": "./",
//     "paths": {
//       "#/*": ["./src/*"],
//       "~/*": ["./*"]
//     },
//     "moduleResolution": "Node",
//     "declaration": true,
//     "allowJs": true,
//     "sourceMap": true,
//     "removeComments": true,
//     "noImplicitAny": true,
//     "noImplicitThis": true,
//     "typeRoots": ["./node_modules/@types", "./types/*.d.ts"],
//     "allowSyntheticDefaultImports": true
//   },
//   "exclude": ["node_modules", "./build/**/*"]
// }
