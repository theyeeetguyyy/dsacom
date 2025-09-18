import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './Head'; // Your home page component
import LoginPage from './LoginPage'; // The new login page component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Head />} />
                <Route path="/login" element={<LoginPage />} />                
            </Routes>
        </Router>
    );
}

export default App;