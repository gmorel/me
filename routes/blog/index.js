/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Blog } from '../../components';

export default {

  path: '/blog',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            postTitle: content.postTitle,
            postDate: content.postDate,
            component: Blog,
            props: content
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
