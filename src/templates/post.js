import React from "react";
import Helmet from "react-helmet";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet
        title={`${post.frontmatter.title}`}
        meta={[
          { name: 'description', content: `${post.frontmatter.description}` },
          { name: 'keywords', content: `${post.frontmatter.keywords}` },
        ]}
      />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author} <span style={{fontSize: '0.8em'}}> {post.frontmatter.date}</span></h4>
        <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        keywords
        description
      }
    }
  }
`;