import { useState, useEffect } from "react";
import Phrase from "./Phrase";
import styled from "@emotion/styled";

const PhraseContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const ButtonEmotion = styled.button`
  background: green;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid black;
  transition: background .2s ease;
  

  :hover{
    cursor: pointer;
    background: darkgreen;
    color: white;
  }

`;

function App() {

const [ phrase, savePhrase ] = useState({});

  const apiRequest = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    const res = await api.json();
    savePhrase(res[0]);
  };

  useEffect(() => {
    apiRequest()
  }, []);

  return (
    <div>
      <PhraseContainer>
        <Phrase phrase={phrase}></Phrase>
        <ButtonEmotion onClick={apiRequest}>New Phrase</ButtonEmotion>
      </PhraseContainer>
    </div>
  );
}

export default App;
