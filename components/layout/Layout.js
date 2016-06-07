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
import Header from './Header';
import s from './Layout.css';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
<div className="row" ref="root">
        <div className="profile col-md-3 wow fadeInDown">
        <div className="profile-image">
            <img src="/images/gmorel-transparency.png"/>
        </div>
        <div className="profile-info">
            <div className="name-job">
                <h1>Guillaume MOREL</h1>
                <span className="job"> Lead Developer</span>
            </div>
            <div className="social-icons">
                <a href="https://github.com/gmorel"><i className="fa fa-github"></i> </a>
                <a href="https://twitter.com/guilmorel"><i className="fa fa-twitter"></i> </a>
                <a href="https://www.linkedin.com/in/guillaume-morel-13299a108"><i className="fa fa-linkedin"></i> </a>
                <a href="https://www.viadeo.com/p/0023trofou7g5bi/"><i className="fa fa-viadeo"></i> </a>
            </div>
        </div>
    </div>


    <div id="tab-container" className="col-md-9">
        <Header/>

        <main {...this.props} className={s.content} />

    </div>
</div>

    );
  }
}

export default Layout;
