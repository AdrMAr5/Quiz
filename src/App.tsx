import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import ViewQuestionsPage from './pages/ViewQuestionsPage/ViewQuestionsPage';
import QuizPage from './pages/QuizPage/QuizPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/questions" element={<ViewQuestionsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
        </Routes>
    );
}

export default App;
