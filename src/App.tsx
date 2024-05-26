import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background';
import Container from './components/Container';
import PageQuestions from './Pages/PageQuestions';

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

  const setResumeState = (state: number) => setQuestionState;

  return (
    <AppStateContext.Provider value={{ questionState, setResumeState }}>
      <div className="App">
        <Background />
        <div className="absolute w-full h-screen flex justify-center items-center">
          {questionState === 0 ? <PageQuestions /> : <></>}
        </div>
      </div>
    </AppStateContext.Provider>
  );
}

export default App;
