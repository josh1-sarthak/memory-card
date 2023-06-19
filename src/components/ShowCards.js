import React from "react";
import styled from 'styled-components';

const DivCards = styled.div`
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    padding: 5px;
    min-width: 600px;
`;

const DivItem = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  height: 210px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 5px;
`;

const ShowCards = (props) => {

    const cardDeck = [
        {
            img: "/floki.jpg",
            name: "Flóki Vilgerðarson",
            birth: "763 AD",
        },
        {
            img: "/bjorn.jpg",
            name: `Björn "Ironside" Ragnarsson`,
            birth: "781 AD",
        },
        {
            img: "/harald.jpg",
            name: "Harald Sigurdsson",
            birth: "763 AD",
        },
        {
            img: "/lagertha.jpg",
            name: "Lagertha",
            birth: "763 AD",
        },
        {
            img: "/ivar-boneless.jpg",
            name: `Ívarr "Boneless" Ragnarsson`,
            birth: "800 AD",
        },
        {
            img: "/ubbe-ragnarsson.jpg",
            name: "Ubbe Ragnarsson",
            birth: "795 AD",
        },
        {
            img: "/hvitserk-ragnarsson.jpg",
            name: "Hvitserk Ragnarsson",
            birth: "797 AD",
        },
        {
            img: "/rollo-normandy.jpg",
            name: "Rollo of Normandy",
            birth: "762 AD",
        },
        {
            img: "/athelstan.jpg",
            name: "Athelstan",
            birth: "780 AD",
        }
    ]

    return(
    <DivCards id="parent"> 
        {cardDeck.map((cardItem) => 
            <DivItem key={cardItem.name} onClick={props.computeScore} className="cards">
                <img src={process.env.PUBLIC_URL + cardItem.img} width="180px" height="150px" alt={cardItem.name} />
                <p> Name: {cardItem.name} <br/>
                    Born: {cardItem.birth}
                </p>
            </DivItem>
        )} 
    </DivCards>

    );
}

export default ShowCards;