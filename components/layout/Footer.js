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

class Footer extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    var currentYear = new Date().getFullYear();

    return (
         <footer className="footer" ref="root">
           <p> Copyright © {currentYear} All right reserved </p>
           <p className="made-with">
             Made with <img src="/images/react-logo.png"/>
           </p>
         </footer>
    );
  }
}

export default Footer;
