import { outlineStyles } from "../../Focus/styles";
import { buttonStyles, selected } from "../styles";

const styles = (theme) => ({
  root: {},
  action: {
    ...buttonStyles(theme),
  },
  li: {
    listStyle: "none",
  },
  selected: {
    ...selected(theme),
    "&:hover": selected(theme),
    "&:focus": {
      outline: "none",
    },
    "&.focus-visible": {
      ...selected(theme),
      ...outlineStyles,
    },
  },
});

export default styles;
