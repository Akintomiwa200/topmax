import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Homepage';
import InstructionPage from './pages/InstructionPage';
import QuizPage from './pages/QuizPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/instruction',
    element: <InstructionPage />
  },
  {
    path: '/quiz',
    element: <QuizPage />
  }
]);

export default router;
