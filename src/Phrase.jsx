import React from "react";
import styled from "@emotion/styled";

const PhraseContainer = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  

  @media (min-width: 992px) {
    margin-top: 15rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    text-align: center;
    position: relative;
    padding: 2rem;

    &::before {
      content: open-quote;
      font-size: 3rem;
      color: black;
      position: absolute;
      left: 0rem;
      top: 1.5rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin: 2rem;
  }
`;

const Phrase = ({ phrase }) => {

    /* if (Object.keys(phrase).length === 0) {
        return null;
    } */

  return (
    <PhraseContainer>
      <h1>{phrase.quote}</h1>
      <p>- {phrase.author}</p>
    </PhraseContainer>
  );
};

export default Phrase;
