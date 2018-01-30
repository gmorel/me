/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    let styleSkillSymfony = {
      width: '90%'
    };
    let styleSkillAngular = {
      width: '70%'
    };
    let styleSkillReact = {
      width: '25%'
    };

    let styleSkillMySQL = {
      width: '90%'
    };
    let styleSkillElasticSearch = {
      width: '60%'
    };
    let styleSkillRedis = {
      width: '70%'
    };
    let styleSkillMongoDB = {
      width: '50%'
    };

    let styleSkillOOP = {
      width: '80%'
    };
    let styleSkillSolid = {
      width: '80%'
    };
    let styleSkillDesignPattern = {
      width: '70%'
    };
    let styleSkillDDD = {
      width: '80%'
    };
    let styleSkillMicroService = {
      width: '70%'
    };

    return (
      <Layout className={s.content}>
        <div id="about" className="content col-md-12 fadeInUp">
          <div className="row page">
            <div className="col-md-12 col-sm-12 col-xs-12 services">

              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-coffee"></i>
                <span>
                                <b>Humility</b>
                                <p>Always something to learn</p>
                            </span>
              </div>
              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-users"></i>
                <span>
                                <b>Team Management</b>
                                <p>Growing TeamPlay</p>
                            </span>
              </div>
              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-graduation-cap"></i>
                <span>
                                <b>Coaching</b>
                                <p>Knowledge sharing</p>
                            </span>
              </div>

              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-fire-extinguisher"></i>
                <span>
                                <b>Quality Assurance</b>
                                <p>Unit/Functional Testing</p>
                            </span>
              </div>
              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-unlock"></i>
                <span>
                                <b>REST API</b>
                                <p>Aiming for Interoperability</p>
                            </span>
              </div>
              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-gears"></i>
                <span>
                                <b>Software Architecture</b>
                                <p>Reducing technical debt</p>
                            </span>
              </div>

              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-stethoscope"></i>
                <span>
                                <b>DevOps</b>
                                <p>Building trust</p>
                            </span>
              </div>
              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-line-chart"></i>
                <span>
                                <b>Min Viable Product</b>
                                <p>So business can experiment</p>
                            </span>
              </div>
              <div className="service col-md-4 col-sm-6">
                <i className="fa fa-rocket"></i>
                <span>
                                <b>Disruptive</b>
                                <p>Using technology to thrive</p>
                            </span>
              </div>

            </div>

            <div className="col-md-12 col-sm-12 col-xs-12 services">
              <div className="service col-md-4 col-sm-6">
                <h3 className="section-group">Web Framework</h3>
                <ul className="skill-list">
                  <li>
                    <h4>Symfony 4 <span>Certified (Level: Expert)</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillSymfony}></div>
                    </div>
                  </li>
                  <li>
                    <h4>Angular 4 (AoT/Redux)<span>Javascript</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillAngular}></div>
                    </div>
                  </li>
                  <li>
                    <h4>React<span>Javascript</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillReact}></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service col-md-4 col-sm-6">
                <h3 className="section-group">Database</h3>
                <ul className="skill-list">
                  <li>
                    <h4>MySQL <span>MariaDB</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillMySQL}></div>
                    </div>
                  </li>
                  <li>
                    <h4>ElasticSearch <span>NoSQL</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillElasticSearch}></div>
                    </div>
                  </li>
                  <li>
                    <h4>Redis <span>NoSQL</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillRedis}></div>
                    </div>
                  </li>
                  <li>
                    <h4>Mongo DB <span>NoSQL</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillMongoDB}></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service col-md-4 col-sm-6">
                <h3 className="section-group">Architecture</h3>
                <ul className="skill-list">
                  <li>
                    <h4>Object-Oriented Programming</h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillOOP}></div>
                    </div>
                  </li>
                  <li>
                    <h4>S.O.L.I.D.</h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillSolid}></div>
                    </div>
                  </li>
                  <li>
                    <h4>Design Pattern</h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillDesignPattern}></div>
                    </div>
                  </li>
                  <li>
                    <h4>Domain Driven Design <span>DDD</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillDDD}></div>
                    </div>
                  </li>
                  <li>
                    <h4>Micro Service <span>and controlled Monolith too</span></h4>
                    <div className="progress">
                      <div className="percentage" style={styleSkillMicroService}></div>
                    </div>
                  </li>
                </ul>
              </div>


            </div>

            <div className="col-md-12 about-text">
              <div className="about-info">
                <ul className="info-list">
                  <li>Location : <span>Marseille (France)</span></li>
                  <li>Currently Learning : <span>Event Storming</span> and <span>Serverless Architecture</span></li>
                </ul>
              </div>
            </div>

            <Footer/>
          </div>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
