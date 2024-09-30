import './App.css';
import Introduction from './Introduction/introduction';
import Skillbar from './skills/skillbar';
import Navbar from './navbar/navbar';
function App() {
  return (
    <div>
      <Navbar />
      <p>Introduction, projects, github, Work experience, socials, skills, inspiration</p>
      <Introduction />
      <Skillbar />
    </div>
  );
}

export default App;
