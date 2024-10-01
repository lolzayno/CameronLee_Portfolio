import './skillbar.css';
import Pill from './pill';
import Python from './python.png';
import MySQL from './mysql.png';
import CLang from './c.png';
import CSharp from './csharp.png';
import CPlus from './c++.png';
import React from './react.png';
import Html from './html.png';
import Css from './css.png';
import Net from './net.png';
import Blazor from './blazor.png';
import Javascript from './javascript.png';
import Matlab from './matlab.png';
import Github from './github.png';
import Aws from './aws.png';
import Googlecloud from './googlecloud.png';

function Skillbar() {
  return (
    <div className="skill-container">
        <a href="/projects" className="skill-button">
          <Pill image={Python} title="Python" />
        </a>
        <Pill image={CLang} title="C" />
        <a href="/experience" className="skill-button">
          <Pill image={CSharp} title="C#" />
        </a>
        <Pill image={CPlus} title="C++" />
        <Pill image={Javascript} title="Javascript" />
        <Pill image={Html} title="HTML" />
        <Pill image={Css} title="CSS" />
        <a href="/projects" className="skill-button">
          <Pill image={React} title="React" />
        </a>
        <a href="/experience" className="skill-button">
          <Pill image={Net} title=".NET" />
        </a>
        <a href="/experience" className="skill-button">
          <Pill image={Blazor} title="Blazor" />
        </a>
        <Pill image={Matlab} title="Matlab" />
        <a href="/projects" className="skill-button">
          <Pill image={MySQL} title="MySQL" />
        </a>
        <a href="/projects" className="skill-button">
          <Pill image={Github} title="Github" />
        </a>
        <a href="/projects" className="skill-button">
          <Pill image={Aws} title="AWS" />
        </a>
        <a href="/projects" className="skill-button">
          <Pill image={Googlecloud} title="Google Cloud" />
        </a>
      </div>
  );
}

export default Skillbar;
