import './discord.css';
import Dis from './discord.png';
import Pill from '../skills/pill';
import Python from '../skills/python.png';
import MySQL from '../skills/mysql.png';
import Github from '../skills/github.png';
import Googlecloud from '../skills/googlecloud.png';
import DiscordVideo from './discord.mp4';

function Discord() {
  return (
    <div className="discord-container">
      <div className="container-content">
        <div className="container-text">
          <img src={Dis} alt="Discord Bot" className="dis-image" />
          <h1>Discord Bot</h1>
          <h4>Full Stack Application</h4>
          <div className="discord-description">
            <p>
              This custom Discord Bot is fully interactive where you enter the user's name, and it displays a variety of League of Legends statistics. Using this statistics, it is compared with professional benchmarks which allows you to improve in areas needed.
            </p>
          </div>
        </div>
        <div className="container-video">
          <video controls className="video-demo">
            <source src={DiscordVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="list-skill">
        <Pill image={Python} title="Python" />
        <Pill image={MySQL} title="MySQL" />
        <Pill image={Github} title="Github" />
        <Pill image={Googlecloud} title="Google Cloud" />
      </div>
    </div>
  );
}

export default Discord;
