import React from "react";
import styled from "styled-components";
import bgImage from "../Assets/Pizza.jpg";

const ItemContainer = styled.div`
  width: 31%;
`;
const ItemPicture = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  height: 8rem;
  background-size: cover;
`;

const ItemTitle = styled.h5`
  margin: 0.5rem 0 0.2rem;
  font-weight: 600;
  font-size: 1.0rem;
`;

const Description = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
`;

const ItemTags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  background: #ff4040;
  margin-right: 0.5rem;
  padding: 0.3rem;
  font-size: 0.7rem;
  border-radius: 3px;
  font-weight: 600;
`;

const Item = (props) => {
  return (
    <ItemContainer>
      {/* {
         TODO: change ITEM title to title prop
         TODO: change contents of h5 to title prop
         TODO: change picture to a picture
         TODO: change tags to props
         TODO: change description string to props
         } */}
      <ItemPicture role="img" aria-label="A picture of food from ITEM TITLE"></ItemPicture>
      <ItemTitle className="item-title">McDonalds</ItemTitle>
      <Description>description string</Description>
      <ItemTags>
        <Tag className="item-time">20-30 Min</Tag>
        <Tag className="item-fee">$5.99 Delivery Fee</Tag>
      </ItemTags>
    </ItemContainer>
  );
};

export default Item;
