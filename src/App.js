import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import RegPage from './pages/RegPage.jsx';
import RestorePasswordPage from './pages/RestorePasswordPage.jsx';
import TestCasePage from './pages/TestCasePage.jsx';
import VacancyPage from './pages/VacancyPage.jsx';
import CatalogVacancyPage from './pages/CatalogVacancyPage.jsx';
import CatalogTestsPage from './pages/CatalogTestsPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import FavTestsPage from './pages/FavTestsPage.jsx';
import FavVacancyPage from './pages/FavVacancyPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegPage />} />
        <Route path="restore" element={<RestorePasswordPage />} />
        <Route path="testcase" element={<TestCasePage />} />
        <Route path="vacancy" element={<VacancyPage />} />
        <Route path="catalog-vacancy" element={<CatalogVacancyPage />} />
        <Route path="catalog-tests" element={<CatalogTestsPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="favourite-vacancy" element={<FavVacancyPage />} />
        <Route path="favourite-tests" element={<FavTestsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
