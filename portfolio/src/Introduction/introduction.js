import './introduction.css';
import PictureMe from './pictureme';
import Name from './name';
import Description from './description';
import Github from '../skills/github.png';
import Linkedin from './link.png';

function Introduction() {
  return (
    <div className="intro-container">
        <PictureMe />
        <div className="description-container">
            <Name />
            <h3>A little bit about me</h3>
            <Description />
            <div className="social-container">
              <a href="https://github.com/lolzayno" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github" className="social-git" />
              </a>
              <a href="https://www.linkedin.com/in/cameronwilliamlee/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="social-linked" />
              </a>
              <a href="/Cameron_Lee_Resume.pdf" download="Cameron_Lee_Resume.pdf">
                <span className="pill">Resume</span>
              </a>
              <a href="/CameronLee_Transcript.pdf" download="CameronLee_Transcript.pdf">
                <span className="pill">Transcript</span>
              </a>
            </div>
        </div>
    </div>
  );
}

export default Introduction;
