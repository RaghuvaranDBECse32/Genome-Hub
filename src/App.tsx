import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Challenge from './pages/Challenge';
import Quiz from './pages/Quiz';
import Developers from './pages/Developers';
import Presentation from './pages/Presentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </Router>
  );
}

export default App;
