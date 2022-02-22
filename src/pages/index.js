import React from 'react'
import { graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => {
        const sources = [ work.desktopImage.fluid,
          { media:`(max-width: 375px)`, ...work.mobileImage.fixed }
        ];

        return (
          <div key={work.id} className="showcase__item">
            <figure className="card">
              <Img fluid={sources} />
            </figure>
          </div>
        );
      })}
    </Masonry>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          desktopImage: coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          mobileImage: coverImage {
            fluid(maxWidth: 200, maxHeight: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
