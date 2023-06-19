import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import ShowCards from './components/ShowCards';

const GlobalStyle = createGlobalStyle`
  body {
    background: #8B6220;
  }
`;

const DivContainer = styled.div`
  font-family: monospace;
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem 0 2rem;
`;

const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid black;
  padding: 5px;
  font-size: 15px;
  height: 200px;
  width: 200px;
  align-self: center;
`;

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [items, setItems] = useState([]); // items is kinda like memory which holds visited item

  const handleScore = (e) => {
    const val = e.currentTarget;
    // check if currently clicked item is in items array, if it is- bestscore->score and score->0, if not, setItems to items+clicked item and increment the score
    if (items.includes(val)){
      setBestScore(winScore => (score > bestScore ? score : bestScore)); //set bestscore(winScore) to score only if score > bestscore
      setScore(0);
      setItems([]); //make items array empty to play next chances
    } else {
      setItems(items => ([...items, val]));
      setScore(score + 1);
    }
  }
 
  useEffect(() => {

    const shuffleCards = (array) => { 
      for (let i=array.length-1; i>0; i--) { // Fisher-Yates shuffle-The idea is to walk the array in the reverse order and swap each element with a random one before it
        let j=Math.floor(Math.random()* (i+1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const displayShuffle = () => {
      const cardsArray = Array.from(cards); // cardsArray is array that contains nodes
      cardsArray.forEach((card) => parent.removeChild(card));
      shuffleCards(cardsArray);
      cardsArray.forEach((card) => parent.appendChild(card));
    };

    const parent = document.querySelector('#parent'); // parent is container
    const cards = parent.querySelectorAll('.cards'); //cards is a nodelist
    cards.forEach((card)=> card.addEventListener('click', displayShuffle)); //add event listener on nodelist not array
    
    return () => {
      cards.forEach((card)=> card.removeEventListener('click', displayShuffle)); //add event listener on nodelist not array
    };
  }, [])


  return (
    <DivContainer>
      <GlobalStyle/>
      <ShowCards computeScore={handleScore} />
      <DivResult>
        <h2> memory-card </h2>
        <p> Current Score: {score} </p>
        <p> Best Score: {bestScore} </p>
      </DivResult>
    </DivContainer>
  );
};

export default App;