import './ehealth.css';
import eHealth from './health.png';
import Pill from '../skills/pill';
import MySQL from '../skills/mysql.png';
import Github from '../skills/github.png';
import CSharp from '../skills/csharp.png';
import Net from '../skills/net.png';
import Blazor from '../skills/blazor.png';

function Health() {
  return (
    <div className="discord-container">
      <img src={eHealth} alt="eHealth Research Team" className="dis-image" />
      <div className="content-with-bullets">
        <div className="text-content">
          <h1>eHealth Research Team</h1>
          <h4>Full Stack Application</h4>
          <div className="discord-description">
            <p>The eHealth research team project aimed to improve patient treatment as well as treatment through a daily surveying app. Patients were encouraged to use a daily surveying app where their answers were converted into a score and sent to a web application monitored by health organizations. A nurse was sent to the patients home or a paramedic was sent to transport patient to a hospital of their needs depending on their health status.</p>
          </div>
        </div>
        <ul className="bullet-points">
          <li>Worked with full time Software Engineers in Purdue University’s TAP team to create a health assessment
          mobile app that helps medical professionals and paramedics treat patients</li>
          <li>Led the transition from a disorganized MongoDB to an optimized HIPAA ensured MySQL database that
          effectively secured patients' health information</li>
          <li>Utilized Blazor framework to design and deploy functional web pages: patient, medic, and organization portals</li>
        </ul>
      </div>
      <div className="skill-list">
        <Pill image={CSharp} title="C#" />
        <Pill image={MySQL} title="MySQL" />
        <Pill image={Github} title="Github" />
        <Pill image={Net} title=".NET" />
        <Pill image={Blazor} title="Blazor" />
      </div>
    </div>
  );
}

export default Health;
