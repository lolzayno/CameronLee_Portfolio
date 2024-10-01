import './discord.css';
import Dis from './discord.png';
import Pill from '../skills/pill';
import Python from '../skills/python.png';
import MySQL from '../skills/mysql.png';
import Github from '../skills/github.png';
import Googlecloud from '../skills/googlecloud.png';

function Discord() {
  return (
    <div className="discord-container">
        <img src={Dis} alt="Discord Bot" className="dis-image" />
        <h1>Discord Bot</h1>
        <h4>Full Stack Application</h4>
        <div className="discord-description">
          <p>This custom Discord Bot is fully interactive where you enter the users name, and it displays a variety of League of Legends statistics. Using this statistics, it is compared with professional benchmarks which allows you to improve in areas needed.</p>
        </div>
        <div className="skill-list">
          <Pill image={Python} title="Python" />
          <Pill image={MySQL} title="MySQL" />
          <Pill image={Github} title="Github" />
          <Pill image={Googlecloud} title="Google Cloud" />
        </div>
    </div>
  );
}

export default Discord;
