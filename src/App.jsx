import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import FindJob from './pages/FindJob';
import ProvideJob from './pages/ProvideJob';
// Import component placeholders if they don't exist yet to avoid crashes during development
// In a real flow I'd create them first, but here I'm defining the structure.

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/find-job" element={<FindJob />} />
                        <Route path="/provide-job" element={<ProvideJob />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
