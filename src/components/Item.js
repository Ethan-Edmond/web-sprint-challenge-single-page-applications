import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      {/* {
         TODO: change ITEM title to title prop
         TODO: change contents of h5 to title prop
         TODO: change picture to a picture
         TODO: change tags to props
         TODO: change description string to props
         } */}
      <div className="item-picture" role="img" aria-label="A picture of food from ITEM TITLE"></div>
      <h5 className="item-title"></h5>
      <p>description string</p>
      <div className="item-tags">
        <div className="item-time">20-30 Min</div>
        <div className="item-fee">$5.99 Delivery Fee</div>
      </div>
    </div>
  );
};

export default Item;
