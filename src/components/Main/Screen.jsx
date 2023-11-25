import "./screen.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Screen = () => {
  return (
    <div id="Screen" className="Screen__Container">
      <div className="Screen__Content__Container">
      <div className="Screen__Content">
        <h1 className="Screen__Content__Title">Hi, I&apos;m</h1>
        <p className="Screen__Content__Name">Guna Prasanth</p>
        <p className="Screen__Content__Text">I&apos;m a Full Stack Web Developer</p>
        <p className="Screen__Content__Font">I am a young passionate developer, ready to build enterprise-level applications that help businesses achieve their goals. I am eager to learn and grow, and I am confident that I can make a significant contribution to the assigned projects</p>
        <div className="Screen__Content__Button">
        <button className="Screen__Btn">Contact Me<FontAwesomeIcon className="Screen__Icon" icon={faLink} /></button>
      </div>
      </div>
      <div className="Screen__Image__Container">
        <img className="Screen__Image" src="https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-man-work-computer-deadline-office-png-image_4677851.png" alt="" />
      </div>
      
      </div>
    </div>
  )
}

export default Screen