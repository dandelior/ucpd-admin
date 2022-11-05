import React from "react";
import { ElementButton } from "payload/components/rich-text";
import "./styles.scss";

const toolbarBaseClass = "rich-text-quote-button";
const QuoteBaseClass = "rich-text-quote";

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" className="fill" />
  </svg>
);

const ToolbarButton: React.FC<{ path: string }> = () => (
  <ElementButton className={toolbarBaseClass} format="quote">
    <Icon />
  </ElementButton>
);

const BlockQuoteElement: React.FC<{
  attributes: any;
  element: any;
  children?: React.ReactNode;
}> = ({ attributes, children }) => (
  <span {...attributes}>
    <div className={QuoteBaseClass}>{children}</div>
  </span>
);

const withBlockQuote = (incomingEditor) => {
  const editor = incomingEditor;
  const { shouldBreakOutOnEnter } = editor;

  editor.shouldBreakOutOnEnter = (element) =>
    element.type === "quote" ? true : shouldBreakOutOnEnter(element);

  return editor;
};

export default {
  name: "quote",
  Button: ToolbarButton,
  Element: BlockQuoteElement,
  plugins: [withBlockQuote],
};
