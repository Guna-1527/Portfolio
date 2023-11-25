import Screen from "../components/Main/Screen";
import About from "../components/Main/About";
import Skill from "../components/Main/Skill";
import Projects from "../components/Main/Projects";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Screen />
      <About />
      <Skill />
      <Projects />
    </div>
  );
};

export default Home;
