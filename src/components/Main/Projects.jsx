import "./project.css";
import { Bounce } from "react-swift-reveal";
const Projects = () => {
    const Project = [
        {
            id: 1,
            title: "Netflix",
            image: "https://cdn.alza.cz/Foto/ImgGalery/Image/netflix-title_1.jpg",
            link: "https://netflix-chi-topaz.vercel.app",
        },
        {
            id: 4,
            title: "Sly Crypto",
            image: "https://internationaljournalofresearch.files.wordpress.com/2020/07/5d07c76a696bfc4b3cb88294_cryptocurrency.jpg",
            link: "https://sly-eight.vercel.app/",
        },
    ];

    return (
        <div className="Project__Container" id="Project">
            <div className="Project__Header">
                <Bounce>
                    <h1>Projects</h1>
                </Bounce>
            </div>
            <div className="Projects__Main__Container">
                <div className="Project__Card">
                    {Project.map((item, index) => {
                        return (
                            <div className="Project__Card__Item" key={index}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="Project__Card__Item__Image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="Project__Card__Item__Content">
                                        <h2>{item.title}</h2>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
