import React, { Component } from "react";
import FetchData from "./service/FetchData";
import Carousel from "react-bootstrap/Carousel";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.fd = new FetchData();
  }

  successProject = (data) => {
    // console.log("Dans successProject");
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.projects = data;
    // sauvegarde du state
    this.setState(copy_state);
  };

  failedProject = (error) => {
    // console.log("Dans failedProject", error);
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
  render() {
    return (
      <Carousel>
        
        {this.state.projects.map((project) => {
          return (             
            <Carousel.Item key={project.id}>
              <img className="d-block w-100" src={project.image} alt="" />
              <Carousel.Caption className="caption">
                <p>{project.title_project}</p>
              </Carousel.Caption>
              
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Slideshow;
