import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Error from './components/Error';
import Footer from './components/Footer';
import Freelances from './pages/Freelances';
import Header from './components/Header';
import Home from './pages/Home'
import Results from './pages/Results';
import Survey from './pages/Survey';
import { ThemeProvider, SurveyProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);