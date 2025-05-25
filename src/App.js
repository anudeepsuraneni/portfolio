
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Blogs = lazy(() => import('./pages/Blogs'));
const NotFound = lazy(() => import('./pages/NotFound'));



const router = createBrowserRouter(
  [
    {
      path: "/portfolio",
      element: <Layout />,
      children: [
        { path: "", element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
        { path: "projects", element: <Suspense fallback={<div>Loading...</div>}><Projects /></Suspense> },
        { path: "blogs", element: <Suspense fallback={<div>Loading...</div>}><Blogs /></Suspense> },
        { path: "skills", element: <Suspense fallback={<div>Loading...</div>}><Skills /></Suspense> },
        { path: "*", element: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense> }
      ]
    },
    // Redirect root to /portfolio
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "*", element: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense> }
      ]
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true
    }
  }
);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
