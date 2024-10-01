import './experience.css';
import Navbar from '../navbar/navbar';
import Health from './ehealth.js';
import Vector from './vector.js';
function Experience() {
  return (
    <div>
        <Navbar />
        <div className="experience-container">
          <Health />
          <Vector />
        </div>
    </div>
  );
}

export default Experience;
