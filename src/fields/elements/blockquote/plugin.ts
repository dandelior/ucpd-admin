const withBlockQuote = (incomingEditor) => {
  const editor = incomingEditor;
  const { shouldBreakOutOnEnter } = editor;

  editor.shouldBreakOutOnEnter = (element) =>
    element.type === "quote" ? true : shouldBreakOutOnEnter(element);

  return editor;
};

export default withBlockQuote;
