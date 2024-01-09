import "./skill.css";
import { Bounce } from "react-swift-reveal";
import Tailwind from "../../assets/tailwind.png";
const Skill = () => {
    return (
        <div className="Skill__Container" id="Skill">
            <div className="Skill__Title">
                <Bounce>
                    <h1>My Skills</h1>
                </Bounce>
            </div>
            <div className="Skill__Content">
                <div className="Skill__Content__Row__One">
                    <abbr title="HTML">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                alt=""
                            />
                        </div>
                    </abbr>
                    <abbr title="CSS">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
                                alt=""
                            />
                        </div>
                    </abbr>
                    <abbr title="Tailwind CSS">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src={Tailwind}
                                alt=""
                            />
                        </div>
                    </abbr>
                    <abbr title="JavaScript">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                alt=""
                            />
                        </div>
                    </abbr>
                    <abbr title="React JS">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
                                alt=""
                            />
                        </div>
                    </abbr>
                </div>
                <div className="Skill__Content__Row__Two">
                    <abbr title="Node js">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png"
                                alt=""
                            />
                        </div>
                    </abbr>

                    <abbr title="Express JS">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://geekflare.com/wp-content/uploads/2023/01/expressjs.png"
                                alt=""
                            />
                        </div>
                    </abbr>

                    <abbr title="Monogo DB">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
                                alt=""
                            />
                        </div>
                    </abbr>

                    <abbr title="MySQL">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://pngimg.com/d/mysql_PNG6.png"
                                alt=""
                            />
                        </div>
                    </abbr>

                    <abbr title="GIT">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                                alt=""
                            />
                        </div>
                    </abbr>
                    <abbr title="Github">
                        <div className="Language One">
                            <img
                                className="Icon__Container"
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt=""
                            />
                        </div>
                    </abbr>
                </div>
            </div>
        </div>
    );
};

export default Skill;
