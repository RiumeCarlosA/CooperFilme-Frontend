import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Error from '../pages/Error/Error';
import SubmitScript from '../pages/Script/Script';
import RegisterClient from '../pages/Client/RegisterClient';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-script" element={<SubmitScript />} />
        <Route path="/register" element={<RegisterClient/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
