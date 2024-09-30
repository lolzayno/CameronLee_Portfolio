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
        <Pill image={Python} title="Python" />
        <Pill image={MySQL} title="MySQL" />
        <Pill image={CLang} title="C" />
        <Pill image={CSharp} title="C#" />
        <Pill image={CPlus} title="C++" />
        <Pill image={React} title="React" />
        <Pill image={Html} title="HTML" />
        <Pill image={Css} title="CSS" />
        <Pill image={Net} title=".NET" />
        <Pill image={Blazor} title="Blazor" />
        <Pill image={Matlab} title="Matlab" />
        <Pill image={Javascript} title="Javascript" />
        <Pill image={Github} title="Github" />
        <Pill image={Aws} title="AWS" />
        <Pill image={Googlecloud} title="Google Cloud" />
      </div>
  );
}

export default Skillbar;
