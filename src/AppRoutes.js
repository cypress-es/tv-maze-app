import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SelectPage from './pages/SelectPage/SelectPage';
import NotFound from './pages/NotFound/NotFound';
import ShowDetail from './pages/ShowDetail/ShowDetail';
import Admin from './pages/Admin/Admin';

const AppRoutes = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/select-example" element={<SelectPage />} />
        <Route path="/shows/:id" element={<ShowDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default AppRoutes;
