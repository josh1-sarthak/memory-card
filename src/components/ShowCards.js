import React from "react";
import styled from 'styled-components';

const DivCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: none;
  border: 2px solid black;
  padding: 5px;
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
            img: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2016/02/v4_floki_05252015_jh_04412.jpg",
            name: "Flóki Vilgerðarson",
            birth: "763 AD",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXB5cjetyQFUh0B-mKKsnmUyd_fWQM9_g6_A&usqp=CAU",
            name: `Björn "Ironside" Ragnarsson`,
            birth: "781 AD",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_we-Plilll136BYLHk8bGVHs34fMEYkygw&usqp=CAU",
            name: "Ragnar Sigurdsson",
            birth: "763 AD",
        },
        {
            img: "https://static.wikia.nocookie.net/vikingstv/images/f/f4/LagerthaSeason6.jpeg/revision/latest/scale-to-width-down/327?cb=20201209232405",
            name: "Lagertha",
            birth: "763 AD",
        },
        {
            img: "https://pbs.twimg.com/profile_images/1252127837567492096/gzzQH89p.jpg",
            name: `Ívarr "Boneless" Ragnarsson`,
            birth: "800 AD",
        },
        {
            img: "https://i.pinimg.com/736x/26/67/e0/2667e0b34f250afa0b2704c4308f8067.jpg",
            name: "Ubbe Ragnarsson",
            birth: "795 AD",
        },
        {
            img: "https://pbs.twimg.com/media/EYDMrNzXsAAtd6Q.jpg",
            name: "Hvitserk Ragnarsson",
            birth: "797 AD",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqr_Koc0uyfrNUIs-ZgTprjAan8DbOB2gNw&usqp=CAU",
            name: "Rollo of Normandy",
            birth: "762 AD",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ck6hEOPhzgu6PV6_dUgjw8u8DgMof6FsKg&usqp=CAU",
            name: "Athelstan",
            birth: "780 AD",
        }
    ]

    return(
    <DivCards id="parent"> 
        {cardDeck.map((cardItem) => 
            <DivItem key={cardItem.name} onClick={props.computeScore} className="cards">
                <img src={cardItem.img} width="180px" height="150px" alt={cardItem.name} />
                <p> Name: {cardItem.name} <br/>
                    Born: {cardItem.birth}
                </p>
            </DivItem>
        )} 
    </DivCards>

    );
}

export default ShowCards;