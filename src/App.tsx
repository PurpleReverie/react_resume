import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background';
import Container from './components/Container';
import PageQuestions from './Pages/PageQuestions';
import IntroSection from './components/introSection';
import ResumeSection from './Pages/MainResume';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export interface ResumeContext {
  setResumeState: (state: string) => void;
}

export const AppStateContext = React.createContext<ResumeContext>({
  setResumeState: (state: string) => {
    /* */
  },
} as ResumeContext);

function App() {
  const navigate = useNavigate();
  const [questionState, setQuestionState] = useState('');

  const setResumeState = (state: string) => {
    setQuestionState(state);
  };

  // const renderAppState = () => {
  //   return [
  //     <>
  //       <PageQuestions />
  //     </>,
  //     <>
  //       <IntroSection />
  //     </>,
  //     <>
  //       <ResumeSection />
  //     </>,
  //   ][questionState];
  // };

  return (
    <AppStateContext.Provider value={{ setResumeState }}>
      <div className="App">
        <Background />
        <div className="absolute w-full h-screen flex justify-center items-center">
          <Routes>
            <Route path="/">
              <Route index element={<ResumeSection />} />
              <Route path="intro" element={<IntroSection />} />
              <Route path="questions" element={<PageQuestions />} />
            </Route>
          </Routes>
        </div>
      </div>
    </AppStateContext.Provider>
  );
}

export default App;
