import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MainHeading from './Components/MainHeading';
import About from './Components/About';
import Skills from './Components/MySkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
      <Header/>
      <MainHeading/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

