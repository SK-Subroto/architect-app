import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import { Switch, Route, Redirect } from "react-router-dom";
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/detail/:id" component={ProjectDetails} />
      </Switch>
      {/* <Projects /> */}
      {/* <ProjectDetails /> */}
      <Footer />
    </div>
  );
}

export default App;
