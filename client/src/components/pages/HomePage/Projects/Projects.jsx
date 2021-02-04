import React, { Component } from 'react';
import axios from 'axios';

import './Projects.scss';
import CardUI from './CardUI/CardUI';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      infos: []
    };
  }
  getInfos = () => {
    const token = process.env.REACT_APP_GITHUB_API_KEY;
    axios
      .get('https://api.github.com/users/maxime-quesnel/repos', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.setState({ infos: res.data });
      });
  };

  componentDidMount() {
    this.getInfos();
  }

  render() {
    return (
      <div className='project__globalContainer' id='project'>
        <p className='project__topTitle'>projects</p>
        <h4 className='project__title'>My projects</h4>
        <div className='project__containerCard'>
          {this.state.infos.map(el => {
            return (
              <>
                <CardUI
                  title={el.name}
                  language={el.language}
                  number={Math.floor(Math.random() * Math.floor(6))}
                  urlGit={el.clone_url}
                />
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Projects;
