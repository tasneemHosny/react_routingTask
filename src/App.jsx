import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartFramework from './Component/start_framework/start_framework';
import About from './Component/about/about';
import Portfolio from './Component/portfolio/portfolio';
import Contact from './Component/contact/contact';
import Layout from './Component/layout/layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'start_framework', element: <StartFramework /> },
        { path: '/', element: <StartFramework /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  { basename: '/RoutingTask_react' } // Set the basename here
);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
