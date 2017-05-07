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

function Blog({ postTitle, postDate, postPictureUrl, tags, html }) {
  return (
    <Layout>
        <div id="blog" className="content col-md-12 page">
            <div className="row" className="blog-item">
                <div className="col-md-12 page">
                    <div className="col-md-12 blog-post">
                        <div className="post-image">
                            <img src={postPictureUrl} alt={tags}/>
                        </div>
                        <div className="post-title">
                            <h2>{postTitle}</h2>
                        </div>
                        <div className="post-info">
                            <span>{postDate}</span>
                        </div>
                        <div className="post-info">
                            <span>{tags}</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: html }} />

                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    </Layout>
  );
}

Blog.propTypes = {
  postTitle: React.PropTypes.string.isRequired,
  postDate: React.PropTypes.string.isRequired,
  postPictureUrl: React.PropTypes.string.isRequired,
  tags: React.PropTypes.string.isRequired,
  html: React.PropTypes.string.isRequired
};

export default Blog;
