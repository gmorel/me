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
import cx from 'classnames';
import Header from './Header';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    var gmorelLogoImg = require("./gmorel-transparency.png");

    return (
    <div className="row" ref={node => (this.root = node)}>
      <div className="profile col-md-3 wow fadeInDown">
        <div className="profile-image">
          <img src={gmorelLogoImg}/>
        </div>
        <div className="profile-info">
          <div className="name-job">
            <h1>Guillaume MOREL</h1>
            <span className="job">Disruptive Lead Developer</span>
          </div>
          <div className="social-icons">
            <a href="https://github.com/gmorel" title="GitHub"><i className="fa fa-github"></i> </a>
            <a href="https://twitter.com/guilmorel" title="Twitter"><i className="fa fa-twitter"></i> </a>
            <a href="https://www.linkedin.com/in/guillaume-morel" title="LinkedIn"><i className="fa fa-linkedin"></i> </a>
          </div>
        </div>
      </div>


      <div id="tab-container" className="col-md-9">
        <Header/>

        <main {...this.props} className={cx(s.content, this.props.className)} />

      </div>
    </div>
    );
  }
}

export default Layout;
