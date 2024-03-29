import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/styles/withStyles";

import linkDetails from "./constants/linkDetails";
import styles from "./styles";

const Footer = ({ classes }) => {
  return (
    <footer className={classes.container}>
      {linkDetails.map(({ label, site, icon }) => (
        <Tooltip
          key={label}
          arrow
          title={label}
          classes={{
            tooltip: classes.tooltip,
            arrow: classes.arrow,
          }}
          TransitionComponent={({ children }) => children}
        >
          <IconButton
            href={site}
            target="_blank"
            className={classes.iconButton}
          >
            {icon}
          </IconButton>
        </Tooltip>
      ))}
    </footer>
  );
};

export { Footer };
export default withStyles(styles)(Footer);
