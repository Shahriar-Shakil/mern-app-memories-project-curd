import React from "react";
import { usePosts } from "../../data/usePosts";
import Post from "./Post/Post";
import useStyles from "./style";
import { Grid, CircularProgress } from "@material-ui/core";

export default function Posts() {
  const classes = useStyles();
  const { data, loading, error } = usePosts();
  if (loading) {
    return <CircularProgress />;
  } else if (!loading && data?.length) {
    return (
      <>
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {data.map((post) => (
            <Grid key={post?._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  } else if (!loading && !data?.length) {
    return <>No data</>;
  }
}
