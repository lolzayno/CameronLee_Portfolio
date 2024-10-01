import './website.css';
import Zayno from './zaynopfp.png';
import Pill from '../skills/pill';
import Python from '../skills/python.png';
import MySQL from '../skills/mysql.png';
import Github from '../skills/github.png';
import Aws from '../skills/aws.png';
import React from '../skills/react.png';
function Website() {
  return (
    <div className="website-container">
        <img src={Zayno} alt="Zayn.gg" className="zayn-image" />
        <h1>Zayn.gg</h1>
        <h4>Full Stack Application</h4>
        <div className="website-description">
          <p>This website aims to display detailed visuals to suggest improvement in various cateogries of League of Legends. It displays champion averages for each game, as well as item, runes, and matchup winrates.</p>
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
