import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
