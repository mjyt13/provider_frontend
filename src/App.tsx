import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import TariffesPage from './pages/TariffsPage/TariffsPafe';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ClientsPage from './pages/ClientsPage/ClientsPage';
import './App.css';
import { fetchTariffClients } from './services/clientService';
import { fetchTariffList } from './services/tariffService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: ":service/tariffs",
    element: <TariffesPage/>,
    loader: async ({params}) => {
      const {service} = params;

      if(!['internet','telephony'].includes(service)){
        throw new Response('не найдено', {status:404});
      }
      try{
        const data = await fetchTariffList(service);
        return data;
      }catch(error){
        console.error(`ТАРИФЫ НЕ ГРУЗЯТСЯ для ${service}`, error);
        throw new Response('не удальос тарифы грузить',{status:500});
      }

    }
  },
  {
    path: ':service/:tariffLink/clients',
    element: <ClientsPage />,
    loader: async ({ params }) => {

      const service = params.service;
      const tariffLink = params.tariffLink;
      
      try{
        const data = await fetchTariffClients(service,tariffLink);
        return { ...data, service, tariffLink };
      }catch(error){
        console.log(error);
        throw new Response('не удалось загрузить данные',{status:500});
      }    
    },
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;