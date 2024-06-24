import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background';
import Container from './components/Container';
import PageQuestions from './Pages/PageQuestions';
import IntroSection from './components/introSection';
import ResumeSection from './Pages/MainResume';

import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useEvent } from './hooks/useEvent';
import { BlogPage } from './Pages/BlogPage';

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
  const { id } = useParams();
  const [questionState, setQuestionState] = useState('');

  const setResumeState = (state: string) => {
    setQuestionState(state);
  };

  return (
    <>
      <AppStateContext.Provider value={{ setResumeState }}>
        <div className="App">
          <Background />
          <div className="absolute w-full flex justify-center items-center">
            <Routes>
              <Route path="/">
                <Route index element={<ResumeSection />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:id" element={<BlogPage />} />
                <Route path="intro" element={<IntroSection />} />
                <Route path="questions" element={<PageQuestions />} />
              </Route>
            </Routes>
          </div>
        </div>
      </AppStateContext.Provider>
    </>
  );
}

export default App;
