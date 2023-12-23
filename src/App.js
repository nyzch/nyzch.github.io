import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { SongAssociation } from './components/projects/songassociation';

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <>< Banner /><About /><Skills /></>
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "/projects/songassociation",
        element: <SongAssociation />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App