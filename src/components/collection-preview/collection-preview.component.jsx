import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div class="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {//use filter to limit items to 4 on the page
      items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
