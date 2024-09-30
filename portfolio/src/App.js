import './App.css';
import Introduction from './Introduction/introduction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skillbar from './skills/skillbar';
import Navbar from './navbar/navbar';
import Project from './projects/projects';
import Experience from './experience/experience';
function App() {
  return (
    <Router>
    <Routes>
      <Route 
        path="/" 
        element={
          <div>
            <Navbar />
            <Introduction />
            <Skillbar />
          </div>
        }
      />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  </Router>
  );
}

export default App;
