import React, { Component } from "react";
import FetchData from "./service/FetchData";
import Header from "./Header";
import { Link } from 'react-router-dom';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.fd = new FetchData();
  }

  successProject = (data) => {
    console.log("Dans successProject");
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.projects = data;
    // sauvegarde du state
    this.setState(copy_state);
  };

  failedProject = (error) => {
    console.log("Dans failedProject", error);
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.error = error;
    // sauvegarde du state
    this.setState(copy_state);
  };

  componentDidMount = async () => {
    try {
      const data = await this.fd.getProjects(); // il faut obligatoirement que getProjects retourne une promesse
      this.successProject(data);
    } catch (error) {
      this.failedProject(error);
    }
  };

  isSelected = (path) => {
    const urlPath = this.props.location.pathname;
    return path === urlPath ? "btn-primary" : "btn-secondary"
  }
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
                      className={`p-1 m-1 h3 btn ${this.isSelected(
                        "/"
                      )}`}
                      to="/"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                  <Link
                      className={`p-1 m-1 h3 btn ${this.isSelected(
                        "/about"
                      )}`}
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
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <h3>Projets</h3>
          </div>
          <div className="row">
            <p>Voici le détail des projets que j'ai réalisés</p>
          </div>
          <div className="row">
            <div className="col">
              {this.state.error && (
                <div>
                  <h2>Erreur</h2>
                  <p>Code de l'erreur : {this.state.error.message}</p>
                  <p>Merci de contacter l'administrateur du portfolio</p>
                </div>
              )}
              {this.state.projects.map((project) => {
                return (
                  <div id="project" className="row mb-5" key={project.id}>
                    <div id="projectImg" className="col-sm-6 col-lg-5">
                      <img src={project.image} alt="" />
                    </div>
                    <div id="projectDescription" className="col-sm-6 col-lg-7 d-flex flex-column justify-content-center align-items-center">
                      <div className="row">
                        <h4>{project.title_project}</h4>
                      </div>
                      <div className="row">{project.description}</div>
                      <div className="row">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.link}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Projects;
