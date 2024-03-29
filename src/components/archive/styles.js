import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  page: {
    padding: 0,
    backgroundColor: palette.text.primary,
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
  innerSubtitle: {
    color: palette.grey[50],
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

export { styles };
export default styles;
