import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Resume from './components/Resume';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage data={PORTFOLIO_DATA} />} />
        <Route path="/resume-view" element={<Resume data={PORTFOLIO_DATA} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
