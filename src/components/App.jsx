import { LoginPage, DashboardPage } from 'pages';
import { CartProvider } from 'react-use-cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route />
        </Route>
      </Routes>
      </CartProvider>
    </>
  );
};
