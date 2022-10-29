import Button from "./Button";
import Element from "./Element";
import withBlockQuote from "./plugin";

export default {
  name: "quote",
  Button,
  Element,
  plugins: [withBlockQuote],
};
