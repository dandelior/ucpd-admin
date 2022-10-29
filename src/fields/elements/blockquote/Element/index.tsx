import React from "react";

import "./index.scss";

const baseClass = "rich-text-quote";

const BlockQuoteElement: React.FC<{
  attributes: any;
  element: any;
  children?: React.ReactNode;
}> = ({ attributes, children }) => (
  <span {...attributes}>
    <div className={baseClass}>{children}</div>
  </span>
);
export default BlockQuoteElement;
