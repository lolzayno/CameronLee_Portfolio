import './navbar.css';
import Leftnav from './leftnav.js';
import Rightnav from './rightnav.js';
function Navbar() {
  return (
    <div className="navbar">
        <Leftnav />
        <Rightnav />
    </div>
  );
}

export default Navbar;
