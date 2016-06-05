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

function Blog({ title, html }) {
  return (
    <Layout>
        <div id="blog" className="content col-md-12">
            <div className="row">
                <div className="page-title">
                    <h2>{title}</h2>
                </div>
                <div className="col-md-12 page">
                    <div className="col-md-12 blog-post">
                        <div className="post-image">
                            <img src="http://www.placehold.it/787x317.jpg" alt=""/>
                        </div>
                        <div className="post-title">
                            <h1>postTitle</h1>
                        </div>
                        <div className="post-info">
                            <span>postDate</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>


                    <Footer/>

                </div>
            </div>
        </div>
    </Layout>
  );
}

Blog.propTypes = {
  title: React.PropTypes.string.isRequired,
  //postTitle: React.PropTypes.string.isRequired,
  //postDate: React.PropTypes.string.isRequired,
  html: React.PropTypes.string.isRequired
};

export default Blog;
