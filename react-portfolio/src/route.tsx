import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Articles = lazy(() => import('./pages/articles'));
const Contact = lazy(() => import('./pages/contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'articles', element: <Articles /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
