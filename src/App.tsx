import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import TariffesPage from './pages/TariffesPage/TariffesPage';
import ClientsPage from './pages/СlientsPage/ClientsPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // errorElement: <Error />,
  },
  {
    path: "tariffes",
    element: <TariffesPage/>,
  },
  {
    path: "tariffes/clients",
    element: <ClientsPage />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;