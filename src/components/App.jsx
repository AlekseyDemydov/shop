
import { CartProvider } from 'react-use-cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { DashboardPage } from 'pages/Dashboard/DashboardPage';
import { Car } from 'pages/Item/Car/Car';
import { Moto } from 'pages/Item/Moto/Moto';
import { BasketPage } from 'pages/Basket/BasketPage';
// import { Form } from 'pages/Form/Form';
import { LoginPage } from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/shop" element={<Layout />}>
          <Route path="login" element={<LoginPage/>} />
          <Route path="dashboard" element={<DashboardPage />}>
            <Route path='car' element={<Car/>}/>
            <Route path='moto' element={<Moto/>}/>
          </Route>
          <Route path='basket' element={<BasketPage/>}/>
          {/* <Route path='form' element={<Form/>}/> */}
          <Route path="*" element={<Navigate to="/shop" replace />} />
        </Route>
      </Routes>
      </CartProvider>
    </>
  );
};
