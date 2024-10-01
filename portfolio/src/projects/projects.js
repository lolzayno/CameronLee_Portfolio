import './projects.css';
import Navbar from '../navbar/navbar';
import Discord from './discord';
import Website from './website';

function Project() {
  return (
    <div>
        <Navbar />
        <div className="project-container">
          <Discord />
          <Website />
        </div>
    </div>
  );
}

export default Project;
