import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Slideshow from "./Slideshow";
import Footer from './Footer';
import { Switch, Route, Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";


class Home extends Component {
  state = {};

  isSelected = (path) => {
    const urlPath = this.props.location.pathname;
    return path === urlPath ? "btn-primary" : "btn-secondary";
  };
  render() {
    return (
      <div className="App">
        <Header path="/home" />
        <main className="container">
          <div className="row">
            <div className="col">
              <nav>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <Link
                      className={`p-1 m-1 h3 btn ${this.isSelected("/")}`}
                      to="/"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-1 m-1 h3 btn ${this.isSelected("/about")}`}
                      to="/about"
                    >
                      Expériences
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-1 m-1 h3 btn ${this.isSelected(
                        "/projects"
                      )}`}
                      to="/projects"
                    >
                      Projets
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className={`p-1 m-1 h3 btn ${this.isSelected(
                        "/contact"
                      )}`}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <h2>Accueil</h2>
          </div>
          <p>Après les formations d'OpenClassrooms et de Diginamic, je souhaite trouver un emploi en tant que Développeuse Web.</p>
          <p>Vous pouvez découvrir les projets que j'ai créés à ces occasions.</p>
          <section>
            <Slideshow />
          </section>
          <section id="network">
            <div className="row">
              <p>Retrouvez-moi sur</p>
              <div className="col">
                <a
                  href="https://www.linkedin.com/in/camoulin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="lien vers linkedin"
                >
                  Linkedin <FaLinkedin />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://github.com/carolinemoulin"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="lien vers Github"
                >
                  Github <FaGithub />
                </a>
              </div>
            </div>
          </section>
          <div className="row">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default Home;
