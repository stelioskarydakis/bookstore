import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";

const Filters = () => {
  const {
    filters: {
      text,
      type,
      language,
      publisher,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "type");
  const languages = getUniqueValues(all_products, "language");
  const companies = getUniqueValues(all_products, "publisher");
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
            />
          </div>
          {/* end of search input */}
          {/* type */}
          <div className="form-control">
            <h5>type</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="type"
                    className={`${type === c.toLowerCase() ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of type */}
          {/* language */}
          <div className="form-control">
            <h5>language</h5>
            <div>
              {languages.map((l, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="language"
                    className={`${
                      language === l.toLowerCase() ? "active" : null
                    }`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of type */}
          {/* publisher */}
          <div className="form-control">
            <h5>publisher</h5>
            <select
              name="publisher"
              value={publisher}
              onChange={updateFilters}
              className="publisher"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of publisher */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of  shipping */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h5 {
    text-transform: uppercase;
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--color-bg-gray);
    border-radius: 10px;
    border-color: transparent;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    color: var(--color-black);
    cursor: pointer;
    font-size: 12px;
    text-align: left;
  }
  .active {
    color: var(--color-yellow);
  }
  .publisher {
    background: var(--color-gray);
    border-radius: 10px;
    border-color: transparent;
    padding: 0.25rem;
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
    font-size: 14px;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 12px;
  }
  .clear-btn {
    background: var(--color-yellow);
    color: var(--color-bg-gray);
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
