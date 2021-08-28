import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  page: {
    width: "100vw",
    [breakpoints.up("sm")]: {
      width: "60vw",
    },
    backgroundColor: palette.text.primary,
    margin: "auto",
    minHeight: "100vh",
  },
  title: {
    color: palette.grey[50],
    paddingTop: 80,
    paddingBottom: 40,
  },
  subtitle: {
    color: palette.grey[50],
    paddingBottom: 40,
  },
  carousel: {
    margin: "auto",
    paddingBottom: 40,
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: {
      width: "45vw",
    },
  },
  button: {
    margin: 8,
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: {
      width: 300,
    },
  },
}));

export { styles };
export default styles;
