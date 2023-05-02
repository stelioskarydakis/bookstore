import styled from "styled-components";
import { mobile } from "../../responsive";
import FeaturedProductCard from "./FeaturedProductCard";
import { useProductsContext } from "../../context/products_context";
import Loading from "./Loading";
import Error from "./Error";

const FeaturedProductsList = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ProductListContainer>
      <div className="container">
        {featured.slice(0, 3).map((product) => {
          return <FeaturedProductCard key={product.id} {...product} />;
        })}
      </div>
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  .container {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    ${mobile({ flexDirection: "column" })}
  }
`;

export default FeaturedProductsList;
