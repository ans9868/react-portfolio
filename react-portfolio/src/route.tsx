import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Research = lazy(() => import('./pages/Research'));
const Engineering = lazy(() => import('./pages/Engineering'));
const Articles = lazy(() => import('./pages/articles'));
const Contact = lazy(() => import('./pages/contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'research', element: <Research /> },
      { path: 'engineering', element: <Engineering /> },
      { path: 'projects', element: <Engineering /> },
      { path: 'articles', element: <Articles /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
