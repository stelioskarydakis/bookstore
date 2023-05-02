import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../../responsive";
import { formatPrice } from "../../utils/helpers";

const FeaturedProductCard = (product) => {
  const { id, name, url, excerpt, price } = product;
  return (
    <ProductContainer>
      <div className="image-container">
        <img src={url} alt={name} />
      </div>
      <div className="data">
        <Link to={`/store/${id}`} className="titlelink">
          <h3>{name}</h3>
        </Link>
        <div className="price">{formatPrice(price)}</div>
        <div className="desc">
          <p>{excerpt}</p>
        </div>
        {/* <ul className="list">
          <li>
            <h4>{type}</h4>
          </li>
        </ul> */}
        <Link to={`/store/${id}`} className="small outlined">
          order now
        </Link>
      </div>
    </ProductContainer>
  );
};
const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  ${tablet({ flexDirection: "column" })}
  .image-container {
    max-width: 300px;
    padding-right: 40px;
    img {
      border: 4px solid #dbe1e9;
      box-shadow: 0px 20px 25px rgba(4, 11, 20, 0.1);
    }
  }
  .data {
    max-width: 281px;
    h3 {
      text-align: left;
      font-size: 32px;
      letter-spacing: -0.02em;
    }
    .price {
      font-weight: 800;
      font-size: 30px;
      line-height: 170%;
      color: var(--color-yellow);
    }
    p {
      color: var(--color-text-dark);
      padding: 14px 0 30px;
    }
    .list {
      padding-bottom: 30px;
      li {
        h4 {
          font-size: 24px;
        }
      }
    }
  }
`;

export default FeaturedProductCard;
