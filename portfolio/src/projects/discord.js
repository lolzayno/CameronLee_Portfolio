import './discord.css';
import Dis from './discord.png';
function Discord() {
  return (
    <div className="discord-container">
        <img src={Dis} alt="Discord Bot" className="dis-image" />
        <h1>Discord Bot</h1>
        <h4>Full Stack Application</h4>
        <div className="discord-description">
          <p>This custom Discord Bot is fully interactive where you enter the users name, and it displays a variety of League of Legends statistics. Using this statistics, it is compared with professional benchmarks which allows you to improve in areas needed.</p>
        </div>
    </div>
  );
}

export default Discord;
