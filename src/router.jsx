import Root from './Root'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    { path: "*", Component: Root },
  ]);

export default router