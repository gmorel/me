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
    var styleSkill1 = {
    width: '60%'
  };
  return (
    <Layout>
        <div id="about" className="content col-md-12 fadeInUp">
            <div className="row">
                <div className="col-md-12 page">
                    <div className="col-md-4 about-info">
                        <h2 className="section-title">About Info</h2>
                        <ul className="info-list">
                            <li>Full Name : <span>Chris Johnson</span></li>
                            <li>Birthday : <span>21 January 1985</span></li>
                            <li>Job : <span>Frelancer</span></li>
                            <li>Website : <span>www.chrisjohnson.com</span></li>
                            <li>Email : <span>chris@domain.com</span></li>
                            <li>Skype : <span>chrisjohnson85</span></li>
                        </ul>
                    </div>
                    <div className="col-md-8 my-skills">
                        <h2 className="section-title">My Skills</h2>
                        <ul className="skill-list">
                            <li>
                                <h3>Photoshop</h3>
                                <div className="progress">
                                    <div className="percentage" style={styleSkill1}></div>
                                </div>
                            </li>
                            <li>
                                <h3>Dreamviewer</h3>
                                <div className="progress">
                                    <div className="percentage" style={styleSkill1}></div>
                                </div>
                            </li>
                            <li>
                                <h3>After Effect</h3>
                                <div className="progress">
                                    <div className="percentage" style={styleSkill1}></div>
                                </div>
                            </li>
                            <li>
                                <h3>Illustrator</h3>
                                <div className="progress">
                                    <div className="percentage" style={styleSkill1}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 about-text">
                        <h2 className="section-title">I’m Web Designer</h2>
                        <p>Donec pulvinar feugiat dui vel egestas. Nulla sit amet risus risus. Nulla auctor libero vitae
                            erat posuere, sit amet viverra turpis lobortis. Nullam eleifend cursus tellus a egestas.
                            Donec at elementum orci. Lorem ipsum dolor. <br/><br/>
                            Aliquam ut purus ex. Aliquam interdum convallis gravida. Curabitur malesuada cursus felis,
                            non molestie odio consequat id. Donec at elementum orci. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Praesent vitae molestie eros. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos himenaeos. Donec pulvinar feugiat dui vel
                            egestas. Nulla sit amet risus risus. Nulla auctor libero vitae erat posuere, sit amet
                            viverra turpis lobortis. Nullam eleifend cursus tellus a egestas. </p>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 services">
                        <h2 className="section-title">What I’m Doing</h2>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-apple"></i>
                                        <span>
                                            <b>Applications</b>
                                            <p>Duis vitae odio gravida</p>
                                        </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-desktop"></i>
                                        <span>
                                            <b>Web Design</b>
                                            <p>Mauris eleifend dapibus</p>
                                        </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-picture-o"></i>
                                        <span>
                                            <b>Illustrations</b>
                                            <p>Posuere ac sem nec</p>
                                        </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-code"></i>
                                        <span>
                                            <b>Development</b>
                                            <p>Curabitur euismod sapien</p>
                                        </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-search"></i>
                                        <span>
                                            <b>Seo Optimization</b>
                                            <p>Etiam vitae condimentum</p>
                                        </span>
                        </div>
                        <div className="service col-md-4 col-sm-6">
                            <i className="fa fa-support"></i>
                                        <span>
                                            <b>Speed Support</b>
                                            <p>Praesent nisl turpis</p>
                                        </span>
                        </div>
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
