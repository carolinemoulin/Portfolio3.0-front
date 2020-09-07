import React, { Component } from "react";
import Header from "./Header";
import FetchData from "./service/FetchData";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Footer from './Footer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      jobs: [],
      trainings: [],
    };
    this.fd = new FetchData();
  }

  successSkill = (dataSkill) => {
    console.log("Dans successSkill");
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.skills = dataSkill;
    // sauvegarde du state
    this.setState(copy_state);
  };

  failedSkill = (error) => {
    console.log("Dans failedSkill", error);
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.error = error;
    // sauvegarde du state
    this.setState(copy_state);
  };

  successJob = (dataJob) => {
    console.log("Dans successJob");
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.jobs = dataJob;
    // sauvegarde du state
    this.setState(copy_state);
  };

  failedJob = (error) => {
    console.log("Dans failedJob", error);
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.error = error;
    // sauvegarde du state
    this.setState(copy_state);
  };

  successTraining = (dataTraining) => {
    console.log("Dans successTraining");
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.trainings = dataTraining;
    // sauvegarde du state
    this.setState(copy_state);
  };

  failedTraining = (error) => {
    console.log("Dans failedTraining", error);
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.error = error;
    // sauvegarde du state
    this.setState(copy_state);
  };

  componentDidMount = async () => {
    try {
      const dataSkill = await this.fd.getSkills(); // il faut obligatoirement que getSkills retourne une promesse
      const dataJob = await this.fd.getJobs();
      const dataTraining = await this.fd.getTrainings();
      this.successJob(dataJob);
      this.successSkill(dataSkill);
      this.successTraining(dataTraining);
    } catch (error) {
      this.failedSkill(error);
      this.failedJob(error);
      this.failedTraining(error);
    }
  };

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
                </ul>
              </nav>
            </div>
          </div>
          <h2>Affichage de l'expérience</h2>
          <div>
            <section id="skills">
              <h3>Mes compétences</h3>
              <div className="row">
                {this.state.error && (
                  <div>
                    <h2>Erreur</h2>
                    <p>Code de l'erreur : {this.state.error.message}</p>
                    <p>Merci de contacter l'administrateur du portfolio</p>
                  </div>
                )}
                {this.state.skills.map((skill) => {
                  return (
                    <div
                      id="skill"
                      className="col-4 col-md-4 col-lg-3 d-flex flex-wrap justify-content-around p-sm-1 p-lg-5"
                      key={skill.id}
                    >
                      <div id="skillImg" className="row md-5">
                        <img className="img-fluid" src={skill.logo} alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <p>
                  J'ai obtenu un score de 735 points à la certification Opquast.
                </p>
              </div>
              <div className="row">
                <a
                  href="https://oqs.li/YFMWUD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lien d'authentification
                </a>
              </div>
            </section>
            <section id="jobs">
              <h3>Mes expériences</h3>
              <div className="row">
                <div className="col">
                  {this.state.error && (
                    <div>
                      <h2>Erreur</h2>
                      <p>Code de l'erreur : {this.state.error.message}</p>
                      <p>Merci de contacter l'administrateur du portfolio</p>
                    </div>
                  )}
                  {this.state.jobs.map((job) => {
                    return (
                      <Card id="job" className="row" key={job.id}>
                        <Card.Title>{job.position}</Card.Title>
                        <Card.Body>
                          <Card.Img variant="bottom" src={job.logo} />
                          <Card.Text>
                            <p>{job.entreprise}</p>
                            <p>{job.missions}</p>
                            <p>Du {job.startDate} au {job.endDate}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>
            <section id="trainings">
              <h3>Mes formations</h3>
              <div className="col">
                {this.state.error && (
                  <div>
                    <h2>Erreur</h2>
                    <p>Code de l'erreur : {this.state.error.message}</p>
                    <p>Merci de contacter l'administrateur du portfolio</p>
                  </div>
                )}
                {this.state.trainings.map((training) => {
                  return (
                    <Card id="training" className="row" key={training.id}>
                      <Card.Title>{training.graduate}</Card.Title>
                        <Card.Body>
                          <Card.Text>
                            <p>{training.institution}</p>
                            <p>{training.date}</p>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default About;
