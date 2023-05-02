import React from "react";
import styled from "styled-components";
import Hero from "../components/shared/Hero";
import Filters from "../components/store/Filters";
import ProductList from "../components/store/ProductList";
import Sort from "../components/store/Sort";

const Store = () => {
  return (
    <main>
      <Hero
        title="My Store"
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name="Store"
      />
      <Wrapper>
        <div className="leftside">
          <Filters />
        </div>
        <div className="rightside">
          <Sort />
          <ProductList />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  min-height: 90vh;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  .leftside {
    width: 25%;
    padding-right: 20px;
  }
  .rightside {
    width: 75%;
  }
`;

export default Store;
