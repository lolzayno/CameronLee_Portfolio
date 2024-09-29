import './introduction.css';
import PictureMe from './pictureme';
import Name from './name';
import Description from './description';
function Introduction() {
  return (
    <div className="intro-container">
        <PictureMe />
        <div className="description-container">
            <Name />
            <h3>A little bit about me</h3>
            <Description />
        </div>
    </div>
  );
}

export default Introduction;
