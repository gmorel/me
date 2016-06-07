/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../layout/Layout.js';
import Footer from '../layout/Footer.js';

function Home({ title, html }) {
  var styleSkillSymfony3 = {
    width: '90%'
  };
  var styleSkillMySQL = {
    width: '90%'
  };
  var styleSkillElasticSearch = {
    width: '60%'
  };
  var styleSkillRedis = {
    width: '70%'
  };
  var styleSkillMongoDB = {
    width: '50%'
  };
  var styleSkillAngular2 = {
    width: '50%'
  };
  var styleSkillOOP = {
    width: '80%'
  };
  var styleSkillDesignPattern = {
    width: '70%'
  };
  var styleSkillDDD = {
    width: '80%'
  };

  return (
    <Layout>
        <div id="about" className="content col-md-12 fadeInUp">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 services">
                        <h2 className="section-title">What I’m Doing</h2>

                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-rocket"></i>
                            <span>
                                <b>Quality Assurance</b>
                                <p>Unit/Functional Testing</p>
                            </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-users"></i>
                            <span>
                                <b>Team Management</b>
                                <p>Grow TeamPlay</p>
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
                            <i className="fa fa-unlock"></i>
                            <span>
                                <b>REST API</b>
                                <p>Interoperability</p>
                            </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-gears"></i>
                            <span>
                                <b>Software Architecture</b>
                                <p>Reduce technical debt</p>
                            </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-stethoscope"></i>
                            <span>
                                <b>DevOps</b>
                                <p>Docker / Linux</p>
                            </span>
                        </div>

                    </div>

                <div className="col-md-12 page">
                    <div className="col-md-4 about-info">
                        <h2 className="section-title">About Info</h2>
                        <ul className="info-list">
                            <li>Location : <span>Marseille (France)</span></li>
                            <li>Currently Learning : <span>Event Storming</span></li>
                        </ul>
                    </div>
                    <div className="col-md-8 my-skills">
                        <h2 className="section-title">My Skills</h2>

                        <h3 className="section-group">Framework</h3>
                        <ul className="skill-list">
                            <li>
                                <h4>Symfony 3 <span>PHP</span></h4>
                                <div className="progress">
                                    <div className="percentage" style={styleSkillSymfony3}></div>
                                </div>
                            </li>
                            <li>
                                <h4>Angular2 <span>Javascript</span></h4>
                                <div className="progress">
                                    <div className="percentage" style={styleSkillAngular2}></div>
                                </div>
                            </li>
                        </ul>

                        <h3 className="section-group">Database</h3>
                        <ul className="skill-list">
                            <li>
                                <h4>MySQL</h4>
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

                        <h3 className="section-group">Architecture</h3>
                        <ul className="skill-list">
                            <li>
                                <h4>Object-Oriented Programming</h4>
                                <div className="progress">
                                    <div className="percentage" style={styleSkillOOP}></div>
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
                        </ul>
                    </div>



                    <Footer/>

                </div>
            </div>
        </div>

    </Layout>
  );
}

Home.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Home;
