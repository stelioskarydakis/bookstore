import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwkjoydz");

  return (
    <Wrapper>
      <div className="container text-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          {state.succeeded ? (
            <>
              <h3>Thanks for joining!</h3>
            </>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-input"
                placeholder="enter email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button
                type="submit"
                className="submit-btn"
                disabled={state.submitting}
              >
                subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--color-text-dark);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--color-black);
  }
  .form-input {
    border-right: none;
    color: var(--color-text-dark);
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
  }
  .submit-btn {
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
  }
  .form-input::placeholder {
    color: var(--color-text-dark);
    text-transform: capitalize;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default ContactForm;
