import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Error from '../pages/Error/Error';
import SubmitScript from '../pages/Script/Script';
import RegisterClient from '../pages/Client/RegisterClient';
import ScriptControl from '../pages/ScriptControl/ScriptControl';
import ScriptDetails from '../pages/ScriptDetails/ScriptDetails';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<RegisterClient />} />

        <Route path="/submit-script" element={<SubmitScript />} />

        <Route path="/pipeline" element={<ScriptControl />} />

        <Route path="/script/:id" element={<ScriptDetails />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
