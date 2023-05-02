import React from "react";
import styled from "styled-components";
import FeaturedProductsList from "./FeaturedProductsList";

const FeaturedProducts = () => {
  return (
    <section>
      <Wrapper>
        <h2 className="title title-center">Author’s Book Includes</h2>
        <div className="featured-products">
          <FeaturedProductsList />
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  .featured-products {
    padding-top: 57px;
  }
`;

export default FeaturedProducts;
