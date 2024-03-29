import React from "react";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { MediaCard, ShowMoreButton, ErrorMessage } from "components";

import styles from "./styles";

const GeneralPage = ({
  currentPage,
  title,
  itemsShown,
  itemsOnPage,
  itemsTotal,
  loadMoreItems,
  error,
  loading,
  loadInitialItems,
}) => {
  const classes = styles();

  return (
    <main className={classes.page}>
      <Typography
        className={classNames(classes.title, {
          [classes.videoTitle]: currentPage === "videos",
        })}
        variant={currentPage === "videos" ? "h5" : "h3"}
        align="center"
      >
        {title}
      </Typography>
      {!!loading && (
        <div className={classes.loading}>
          <CircularProgress className={classes.loadingIcon} />
        </div>
      )}
      {!loading && !!error && <ErrorMessage onClick={loadInitialItems} />}
      {!loading && !error && (
        <Grid className={classes.content} container justifyContent="center">
          {itemsShown.map(
            ({ cardImage, title, subtitle, genre, links, link }) => (
              <Grid
                key={title}
                className={classes.content}
                item
                xs={12}
                md={6}
                lg={4}
              >
                <MediaCard
                  currentPage={currentPage}
                  image={cardImage}
                  title={title}
                  tagline={subtitle}
                  genre={genre}
                  pageLink={links?.[0]}
                  downloadLink={links?.[1]}
                  itchioLink={links?.[2]}
                  link={link}
                />
              </Grid>
            )
          )}
          {itemsOnPage < itemsTotal && (
            <ShowMoreButton onClick={loadMoreItems} />
          )}
        </Grid>
      )}
    </main>
  );
};

GeneralPage.defaultProps = {
  title: "",
  itemsShown: [],
  itemsOnPage: null,
  itemsTotal: null,
  loadMoreItems: () => {},
};

export { GeneralPage };
export default GeneralPage;
