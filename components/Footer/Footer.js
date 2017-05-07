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

function Footer() {
  var currentYear = new Date().getFullYear();

  return (
    <footer className="footer" ref={node => (this.root = node)}>
      <p> Copyright © {currentYear} All right reserved </p>
      <p className="made-with">
        Made with <img src="/images/react-logo.png"/>
      </p>
    </footer>
  );
}

export default Footer;
