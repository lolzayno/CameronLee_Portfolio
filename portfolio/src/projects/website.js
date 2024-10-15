import './website.css';
import Zayno from './zaynopfp.png';
import Pill from '../skills/pill';
import Python from '../skills/python.png';
import MySQL from '../skills/mysql.png';
import Github from '../skills/github.png';
import Aws from '../skills/aws.png';
import React from '../skills/react.png';
import WebsiteVideo from './website.mp4';

function Website() {
  return (
    <div className="website-container">
      <div className="content-container">
        <div className="video-container">
          <video controls className="demo-video">
            <source src={WebsiteVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-container">
          <img src={Zayno} alt="Zayn.gg" className="zayn-image" />
          <h1>Zayn.gg</h1>
          <h4>Full Stack Application</h4>
          <div className="website-description">
            <p>
              This website aims to display detailed visuals to suggest improvement in various categories of League of Legends. It displays champion averages for each game, as well as item, runes, and matchup win rates.
            </p>
          </div>
        </div>
      </div>
      <div className="website-list">
        <Pill image={React} title="React" />
        <Pill image={Python} title="Python" />
        <Pill image={MySQL} title="MySQL" />
        <Pill image={Github} title="Github" />
        <Pill image={Aws} title="AWS" />
      </div>
    </div>
  );
}

export default Website;
