// react tools
import { Route, Routes, Navigate } from 'react-router-dom';

// pages, layouts, etc...
import MainLayout from './layouts/MainLayout';
import Events from './pages/Events';

function AllRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainLayout>
  )
}

export default AllRoutes;
