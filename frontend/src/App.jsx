import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';
import NewTask from './pages/NewTask';
import NotFound from './pages/NotFound';
import EditTask from './pages/EditTask';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/new" element={<NewTask />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
<Route path="/edit/:id" element={<EditTask />} />

export default App;