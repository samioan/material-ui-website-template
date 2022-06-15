import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  button: {
    position: "fixed",
    bottom: 0,
    right: 8,
    zIndex: "1000",
    borderRadius: "10px 10px 0 0",
    "&.MuiButton-containedPrimary": {
      backgroundColor: "#111",
    },
    [breakpoints.up("lg")]: {
      right: 40,
    },
  },
  text: {
    color: "white",
  },
}));

export { styles };
export default styles;
