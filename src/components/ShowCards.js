import React from "react";
import styled from 'styled-components';

const DivCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: none;
  border: 2px solid black;
  padding: 5px;
  height: 700px;
`;

const DivItem = styled.div`
  border: 2px solid black;
  padding: 2px;
  height: 220px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShowCards = (props) => {
    return(
    <DivCards id="parent"> 
        <DivItem onClick={props.computeScore} className="cards"> 
            <img src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2016/02/v4_floki_05252015_jh_04412.jpg" width="180px" height="150px" alt="floki" />
            <p> Name: Flóki Vilgerðarson <br />
                Born: 763 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXB5cjetyQFUh0B-mKKsnmUyd_fWQM9_g6_A&usqp=CAU" width="180px" height="150px" alt="bjorn" />
            <p> Name: Björn "Ironside" Ragnarsson <br/>
                Born: 781 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_we-Plilll136BYLHk8bGVHs34fMEYkygw&usqp=CAU" width="180px" height="150px" alt="ragnar" />
            <p> Name: Ragnar Sigurdsson <br/>
                Born: 763 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards">
            <img src="https://lgbtfansdeservebetter.com/static/uploads/2017/05/Lagertha-Katheryn-Winnick.png" width="180px" height="150px" alt="lagertha" />
            <p> Name: Lagertha <br/>
                Born: 763 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards"> 
            <img src="https://pbs.twimg.com/profile_images/1252127837567492096/gzzQH89p.jpg" width="180px" height="150px" alt="ivar" />
            <p> Name: Ívarr "Boneless" Ragnarsson <br/>
                Born: 800 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards"> 
            <img src="https://i.pinimg.com/736x/26/67/e0/2667e0b34f250afa0b2704c4308f8067.jpg" width="180px" height="150px" alt="ubbe" />
            <p> Name: Ubbe Ragnarsson <br/>
                Born: 795 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards"> 
            <img src="https://pbs.twimg.com/media/EYDMrNzXsAAtd6Q.jpg" width="180px" height="150px" alt="hvitserk" />
            <p> Name: Hvitserk Ragnarsson <br/>
                Born: 797 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqr_Koc0uyfrNUIs-ZgTprjAan8DbOB2gNw&usqp=CAU" width="180px" height="150px" alt="rollo" /> 
            <p> Name: Rollo of Normandy <br/>
                Born: 762 AD 
            </p>
        </DivItem>
        <DivItem onClick={props.computeScore} className="cards"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ck6hEOPhzgu6PV6_dUgjw8u8DgMof6FsKg&usqp=CAU" width="180px" height="150px" alt="athlestan" />
            <p> Name: Athelstan <br/>
                Born: 780 AD 
            </p>
        </DivItem>
    </DivCards>

    );
}

export default ShowCards;