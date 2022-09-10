import axios from "axios";
import React, { Component } from "react";
import Result from "./Result";

class Repos extends Component {
  constructor() {
    super();
    this.state = {
      links: [],
    };
  }
  componentDidMount = () => {
    axios.get("http://api.github.com/users/" + this.props.Username + "/repos?client_id=6911d4269bc4f6ddf233&client_secret=3feaf5064fe244b800c467ac21dbe4c9b111a85a&sort=created").then((response) => {
      this.setState({
        links: response.data,
      });
    });
  };

  render() {
    return (
      <div>
        <hr></hr>
          <h1>repository</h1>
 {
          <ol>
            {this.state.links.map((repos, index) => {
              return (
                
                <div key={index}>
                  <Result qoute={repos} index={index} />
                </div>
              );
            })}
          </ol>
        }
      </div>
    );
  }
}

export default Repos;
