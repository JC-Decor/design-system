import { createBrowserRouter } from 'react-router-dom';
import { Center, Loader } from '@jcdecor/ui';
import { DocsShell } from './layout/DocsShell';
import { NotFound } from './layout/NotFound';
import { allPages } from './nav';

export const router = createBrowserRouter([
  {
    element: <DocsShell />,
    HydrateFallback: () => (
      <Center h="100vh">
        <Loader />
      </Center>
    ),
    children: [
      ...allPages.map((item) => ({
        path: item.path,
        lazy: async () => ({ Component: (await item.page()).default }),
      })),
      { path: '*', Component: NotFound },
    ],
  },
]);
