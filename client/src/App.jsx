import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // The new login page component
import LandingPage from './pages/LandingPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />                
        </Routes>
    );
}

export default App;