import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  page: {
    padding: 0,
    backgroundColor: palette.text.primary,
    minHeight: "calc(100vh - 48px)",
  },
  title: {
    paddingTop: 80,
    color: palette.grey[50],
  },
  subtitle: {
    paddingTop: 40,
    paddingBottom: 40,
    color: palette.grey[50],
  },
  content: {
    padding: 16,
  },
}));

export { styles };
export default styles;
