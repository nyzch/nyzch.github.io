import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './components/Error';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SongAssociation } from './components/projects/songassociation';
import { MallocLab } from './components/projects/malloclab';

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <>< Banner /><About /><Skills /></>
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "/projects/songassociation",
        element: <SongAssociation />
      },
      {
        path: "/projects/memoryallocator",
        element: <MallocLab />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App