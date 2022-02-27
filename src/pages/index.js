import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Feature from "../components/feature";
import Gallery from "../components/gallery";

const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <Feature />
      <Gallery imgData={data} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allImageSharp {
      edges {
        node {
          fluid {
            originalName
          }
          gatsbyImageData
        }
      }
    }
  }
`;
