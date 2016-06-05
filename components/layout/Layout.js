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
                <a href="#"><i className="fa fa-facebook"></i> </a>
                <a href="#"><i className="fa fa-twitter"></i> </a>
                <a href="#"><i className="fa fa-behance"></i> </a>
                <a href="#"><i className="fa fa-dribbble"></i> </a>
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
