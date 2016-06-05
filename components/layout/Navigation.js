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
import { Link } from 'react-app';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref="root">
        <ul className="top-menu wow fadeInRight">
          <li>
            <Link className="selected" to="/">
              <i className="fa fa-user"></i> <br/> <span className="hidden-xs"> About Me </span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <i className="fa fa-comments"></i> <br/> <span className="hidden-xs"> Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/not-found">Not Found</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
