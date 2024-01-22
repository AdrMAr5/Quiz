import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import ViewQuestionsPage from './pages/ViewQuestionsPage/ViewQuestionsPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/questions" element={<ViewQuestionsPage />} />
        </Routes>
    );
}

export default App;
