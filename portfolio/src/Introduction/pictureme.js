import './pictureme.css';
import CameronLee from './me.png';

function PictureMe() {
  return (
    <div className="portrait-container">
        <img src={CameronLee} alt="Cameron Lee" className="portrait" />
    </div>
  );
}

export default PictureMe;
