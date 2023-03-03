
import { CartProvider } from 'react-use-cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { DashboardPage } from 'pages/Dashboard/DashboardPage';
import { Car } from 'pages/Item/Car/Car';
import { Moto } from 'pages/Item/Moto/Moto';

export const App = () => {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="login" element={<LoginPage />} /> */}
          <Route path="dashboard" element={<DashboardPage />}>
            <Route path='car' element={<Car/>}/>
            <Route path='moto' element={<Moto/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      </CartProvider>
    </>
  );
};
