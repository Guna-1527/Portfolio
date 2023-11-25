import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Navbar = () => {

  const [Click , SetClick] = useState(false);

  const handleClick = () => {
    SetClick(!Click);
  }

  return (
    <div className="Navbar__Container">
      <div className="Navbar-Logo__Container">
        <a href="/">
          <p className="Navbar-Text-Content">Portfo<span>lio.</span></p>
        </a>
      </div>
      <div className={Click ? "LeftNavbar__Slide LeftNavbar__Slide__Design" : "Navbar-Link__Container Anime__Deactive"}>
        <li><a href="#Screen" className="active">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skill">Skill</a></li>
        <li><a href="#Project">Projects</a></li>
      </div>
      <div onClick={handleClick} className="Navbar-HandBurger">
      {Click ?  <FontAwesomeIcon className="HandBurger__Icon" icon={faX} /> : <FontAwesomeIcon className="HandBurger__Icon" icon={faBars} /> }
      </div>
    </div>
  )
}

export default Navbar