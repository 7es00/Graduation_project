
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Front from "./pages/Front"
import Technologies from "./pages/Technologies";
import QuizBtn from './components/QuizBtn';
import QuizView from './components/QuizView';
import { DarkModeProvider } from "./components/DarkModeContext";



function App() {
  return (
    <DarkModeProvider>
    <BrowserRouter>
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route path="/stacks/:id" element={<Front />} />
        <Route path="/stacks/:id/technologies" element={<Technologies />} />
        <Route path="/technologies/:id" element={<Technologies />} />
        <Route path="/quizzes" element={<QuizView />} />
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>

  );
}



export default App;
