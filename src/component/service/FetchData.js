class FetchData {
  constructor() {
    this.url = 'http://localhost:9000/';
    // this.headers = {
    //   "Content-Type": "application/json",
    //   Authorization: "Basic " + btoa("admin:admin") // btoa = encodage en base 64
    // };
    this.credentials = "same-origin";
  }

  getProjects = () => {
    return fetch(`${this.url}admin/projects`, {
      credentials: this.credentials,
      method: "GET",
      headers: this.headers
    }).then(function (response) {
      if (response.status !== 200) {
        throw new Error("Erreur " + response.status);
      }
      return response.json();// teste si c'est bien du json
    })
      .then(function (data) {
        // console.log('data : ', data);// J'ai ma donnée au format json
        return data;
      });

  }

  getJobs = () => {
    return fetch(`${this.url}admin/jobs`, {
      credentials: this.credentials,
      method: "GET",
      headers: this.header,
    })
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error("Erreur" + response.json());
        }
        // console.log("Dans le fetch de jobs");
        return response.json();
      })
      .then(function (data) {
        // console.log("dans le fetch get jobs :" , data);
        return data;
      });
  };

  getSkills = () => {
    return fetch(`${this.url}admin/skills`, {
      credentials: this.credentials,
      method: "GET",
      headers: this.headers
    }).then(function (response) {
      if (response.status !== 200) {
        throw new Error("Erreur " + response.status);
      }
      return response.json();// teste si c'est bien du json
    })
      .then(function (data) {
        // console.log('data : ', data);// J'ai ma donnée au format json
        return data;
      });

  }

  getTrainings = () => {
    return fetch(`${this.url}admin/trainings`, {
      credentials: this.credentials,
      method: "GET",
      headers: this.headers
    }).then(function (response) {
      if (response.status !== 200) {
        throw new Error("Erreur " + response.status);
      }
      return response.json();// teste si c'est bien du json
    })
      .then(function (data) {
        // console.log('data : ', data);// J'ai ma donnée au format json
        return data;
      });

  }

  postContact = ({ email, message }) => {
    return fetch(`${this.url}admin/mails`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email, message
      })
    }).then(function (response) {
      if (response.status !== 201) {
        throw new Error("erreur " + response.status);
      }
      return response.json();// teste si c'est bien du json
    })
      .then(function (data) {
        // console.log('data : ', data);// J'ai ma donnée au format json
        return data;
      });
  }

}

export default FetchData;