import "./project.css"

const Projects = () => {

  const Project = [
    {
      id: 1,
      title: "Netflix",
      image: "https://cdn.alza.cz/Foto/ImgGalery/Image/netflix-title_1.jpg",
      link: "https://netflix-chi-topaz.vercel.app"
    },
    {
      id: 2,
      title: "Todo App",
      image: "data:image/png;base64,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",
      link: "https://to-do-app-7e652.web.app"
    },
    {
      id: 3,
      title: "E-commerce",
      image: "https://ethicsinfotech.in/uploads/slider/e-commerce-website.png",
      link: "https://netflix-clone-cf4f6.web.app/"
    },
    {
      id: 4,
      title: "Sly Crypto",
      image: "https://internationaljournalofresearch.files.wordpress.com/2020/07/5d07c76a696bfc4b3cb88294_cryptocurrency.jpg",
      link: "https://sly-eight.vercel.app/"
    }
  ]


  return (
    <div className="Project__Container" id="Project">
      <div className="Project__Header">
        <h1>Projects</h1>
      </div>
      <div className="Projects__Main__Container">
        <div className="Project__Card">
          {
            Project.map((item, index) => {
              return (
                <div className="Project__Card__Item" key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="Project__Card__Item__Image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="Project__Card__Item__Content">
                      <h2>{item.title}</h2>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
