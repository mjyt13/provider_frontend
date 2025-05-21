import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import InternetTariffesPage from './features/internet/components/InternetTariffesPage';
import TelephonyTariffesPage from './features/telephony/layout/TelephonyTariffesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ClientsPage from './pages/ClientsPage/ClientsPage';
import './App.css';

import { tariffeCS2Data,tariffeFastData,tariffeSlowData,tariffeBestData } from './features/internet/api/mockClients';
import { tariffeCallData,tariffePrankData,tariffeVIPData } from './features/telephony/api/mockClients';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "internet/tariffs",
    element: <InternetTariffesPage/>,
  },
  {
    path: "telephony/tariffs",
    element: <TelephonyTariffesPage/>
  },
  {
    path: ':service/:tariffLink/clients',
    element: <ClientsPage />,
    loader: ({ params }) => {
      const tariffMap: Record<string, any> = {
        internet: {
          fast: tariffeFastData,
          cs2: tariffeCS2Data,
          slow: tariffeSlowData,
          thebest: tariffeBestData
          // добавь остальные тарифы интернета
        },
        telephony: {
          call: tariffeCallData,
          prank: tariffePrankData,
          VIP: tariffeVIPData,
          // добавь остальные тарифы телефонии
        },
      };

      const service = params.service;
      const tariffLink = params.tariffLink;

      const data = tariffMap[service]?.[tariffLink];

      if (!data) {
        throw new Response('Тариф не найден', { status: 404 });
      }

      return { ...data, service, tariffLink };
    },
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;