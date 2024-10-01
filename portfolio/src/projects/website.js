import './website.css';
import Zayno from './zaynopfp.png';
function Website() {
  return (
    <div className="website-container">
        <img src={Zayno} alt="Zayn.gg" className="zayn-image" />
        <h1>Zayn.gg</h1>
        <h4>Full Stack Application</h4>
        <div className="website-description">
          <p>This website aims to display detailed visuals to suggest improvement in various cateogries of League of Legends. It displays champion averages for each game, as well as item, runes, and matchup winrates</p>
        </div>
    </div>
  );
}

export default Website;
