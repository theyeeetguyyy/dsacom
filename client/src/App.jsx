import { Routes, Route } from 'react-router-dom';
import Head from './components/Head'; // Your home page component
import LoginPage from './pages/LoginPage'; // The new login page component

function App() {
    return (
        <Routes>
            <Route path="/" element={<Head />} />
            <Route path="/login" element={<LoginPage />} />                
        </Routes>
    );
}

export default App;