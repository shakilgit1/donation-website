
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistic/Statistics';
import ErrorPage from '../ErrorPage/ErrorPage';
import DonationDetails from '../Components/DonationDetails/DonationDetails';


const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
         path: '/',
         element: <Home></Home>,
         loader: () => fetch('/donation.json')
        },
        {
            path:'/donation',
            element: <Donation></Donation>
        },
        {
          path: '/statistics',
          loader: () => fetch('/donation.json'),
          element: <Statistics></Statistics>
        },
        {
          path: '/details/:id',
          loader: () => fetch('/donation.json'),
          element: <DonationDetails></DonationDetails>
        }
      ]
    }
])

export default router;