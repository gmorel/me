/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
    <nav ref={node => (this.root = node)}>
      <ul className="top-menu wow fadeInRight">
        <li>
          <Link className="selected" to="/">
            <i className="fa fa-user"></i> <br/> <span className="hidden-xs"> About Me </span>
          </Link>
        </li>
        {/*<li>*/}
        {/*<Link to="/blog">*/}
        {/*<i className="fa fa-comments"></i> <br/> <span className="hidden-xs"> Blog</span>*/}
        {/*</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
    );
  }

}

export default Navigation;
