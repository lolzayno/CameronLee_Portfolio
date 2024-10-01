import './vector.css';
import VectorImg from './vector.png';

function Vector() {
  return (
    <div className="discord-container">
      <img src={VectorImg} alt="Vector Controls Inc." className="vector-image" />
      <div className="content-with-bullets">
        <div className="text-content">
          <h1>Vector Controls Inc.</h1>
          <h4>Engineering Intern</h4>
          <div className="discord-description">
            <p>Vector Controls ultimately manufactured and produced boat navigation components and systems. During my time there, I tested a variety of different electrical components using multimeters, power supplies, and signal machines.</p>
          </div>
        </div>
        <ul className="bullet-points">
          <li>Applied electrical instruments and circuit analysis to test 200+ motherboards and diagnosed faulty components</li>
          <li>Tested a variety of 300+ marine vehicle navigation components: joysticks, levers, helms, sensors, gauges,
          hydraulics, LCDs, and engine controllers</li>
          <li>Conducted 20+ full system boat evaluations, assembling levers, helms, LCDs, motherboards, and hydraulics,
          and utilized electrical tools to further verify full system functionality as a whole before sending to customers</li>
        </ul>
      </div>
    </div>
  );
}

export default Vector;
