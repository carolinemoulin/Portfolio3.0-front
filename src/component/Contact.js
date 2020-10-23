import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import FetchData from './service/FetchData';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
    this.fd = new FetchData();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isSelected = (path) => {
    const urlPath = this.props.location.pathname;
    return path === urlPath ? "btn-primary" : "btn-secondary";
  };

  handleChange(e) {
    const name = e.target.name;
    this.setState({
      [name] : e.target.value,
    });
    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(this.state)
    console.log(data)
    this.fd
      .postContact(data)
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
                  <li>
                    <Link
                      className={`p-1 m-1 h3 btn ${this.isSelected(
                        "/contact"
                      )}`}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
            <h2 className="text-2xl pt-6 pb-10 text-center font-medium text-gray-800">
                Laissez-moi un message
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">Votre email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Votre message</label>
                <textarea
                  name="message"
                  id="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder="Dites moi ce que vous souhaitez..."
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="" type="submit" value="Envoyer">
                  Envoyer le message
                </button>
              </div>
            </form>
            {JSON.stringify(this.state)}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Contact;
