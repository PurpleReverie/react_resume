import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background';
import Container from './components/Container';
import PageQuestions from './Pages/PageQuestions';
import IntroSection from './components/introSection';
import ResumeSection from './Pages/MainResume';

export interface ResumeContext {
  questionState: number;
  setResumeState: (state: number) => void;
}

export const AppStateContext = React.createContext<ResumeContext>({
  questionState: 0,
  setResumeState: (state: number) => {
    /* */
  },
} as ResumeContext);

function App() {
  const [questionState, setQuestionState] = useState(0);

  const setResumeState = (state: number) => {
    setQuestionState(state);
  };

  const renderAppState = () => {
    return [
      <>
        <PageQuestions />
      </>,
      <>
        <IntroSection />
      </>,
      <>
        <ResumeSection />
      </>,
    ][questionState];
  };

  return (
    <AppStateContext.Provider value={{ questionState, setResumeState }}>
      <div className="App">
        <Background />
        <div className="absolute w-full h-screen flex justify-center items-center">
          {renderAppState()}
        </div>
      </div>
    </AppStateContext.Provider>
  );
}

export default App;
