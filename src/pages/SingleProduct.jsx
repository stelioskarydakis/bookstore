import { useEffect } from "react";
import styled from "styled-components";
import Hero from "../components/shared/Hero";
import SingleProductDetailItem from "../components/store/SingleProductDetailItem";
import { mobile, tablet } from "../responsive";
import { single_product_url as url } from "../utils/data";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";
import AddToCart from "../components/store/AddToCart";

const SingleProduct = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return (
      <Wrapper>
        <Loading />;
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  }

  const {
    name,
    price,
    description,
    language,
    stock,
    id: sku,
    publisher,
    paperback,
    dimersions,
  } = product;

  const imgUrl = product?.image;

  return (
    <Wrapper>
      <Hero
        title={name}
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name={name}
        product
      />
      <section>
        <div className="container">
          <div className="left">
            {imgUrl && <img src={imgUrl[0].url} alt="book" />}
          </div>
          <div className="right">
            <h2>{name}</h2>
            <div className="price">{formatPrice(price)}</div>
            <h5 className="stock">
              Stock: {stock > 0 ? stock : "Coming Soon"}
            </h5>
            <p>{description}</p>
            <div className="details">
              <SingleProductDetailItem title="Publisher" text={publisher} />
              <SingleProductDetailItem title="Language" text={language} />
              <SingleProductDetailItem
                title="Paperback"
                text={`212 ${paperback}`}
              />
              <SingleProductDetailItem title="ISBN-10" text={sku} />
              <SingleProductDetailItem title="Dimersions" text={dimersions} />
            </div>
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 90vh;
  .container {
    display: flex;
    justify-content: center;
    gap: 86px;
    flex-direction: row;
    padding: 0 0.5rem;

    ${mobile({ gap: "20px", flexDirection: "column" })};
  }
  .left {
    background-color: var(--color-gray);
    padding: 70px 100px;
    display: flex;
    justify-content: center;
    ${tablet({ padding: "20px" })};
    img {
      max-width: 380px;
      min-width: 380px;
      object-fit: contain;
      ${tablet({ minWidth: "250px" })};
    }
  }
  .right {
    h2 {
      font-size: 32px;
      line-height: 120%;
      letter-spacing: -0.02em;
      color: var(--color-blue);
    }
    .price {
      font-weight: 800;
      font-size: 30px;
      line-height: 170%;
      color: var(--color-yellow);
      letter-spacing: -0.01em;
      padding: 6px 0 10px;
    }
    .stock {
      padding-bottom: 26px;
    }
    p {
      color: var(--color-text-dark);
    }
    .details {
      padding: 20px 0 10px;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        margin-right: 12px;
        min-width: 20px;
        margin-top: -3px;
      }
    }
  }
`;

export default SingleProduct;
