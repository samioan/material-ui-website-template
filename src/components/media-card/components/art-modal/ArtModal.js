import React from "react";

import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

import { LoadingImage } from "components";

import styles from "./styles";

const ArtModal = ({ classes, image, title, open, handleClose }) => (
  <Modal className={classes.modal} open={open} onClose={handleClose}>
    <div className={classes.paper}>
      <LoadingImage
        image={image}
        customLoaderClass={classes.loading}
        customImageClass={classes.image}
        alt={title}
      />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <IconButton onClick={handleClose} className={classes.iconButton}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </div>
  </Modal>
);

export { ArtModal };
export default withStyles(styles)(ArtModal);
