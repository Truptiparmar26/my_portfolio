import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import { CVProvider } from './context/CVContext';
import CVModal from './components/CVModal';

function App() {
  return (
    <CVProvider>
      <Router>
        <CVModal />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          
          {/* Admin Routes - later we can add protection middleware here */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </CVProvider>
  );
}

export default App;

