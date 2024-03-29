import React from "react";

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";

import { LoadingImage } from "components";

import styles from "./styles";

const GameImageGallery = ({ pageItem, classes }) => (
  <Grid className={classes.gallery} container justifyContent="center">
    {pageItem?.screenshots?.map((item) => (
      <Grid
        item
        xs={12}
        sm={6}
        className={classes.imageContainer}
        key={item.toString()}
      >
        <LoadingImage
          image={item}
          customLoaderClass={classes.loading}
          customImageClass={classes.image}
          alt={item.toString()}
        />
      </Grid>
    ))}
  </Grid>
);

export { GameImageGallery };
export default withStyles(styles)(GameImageGallery);
