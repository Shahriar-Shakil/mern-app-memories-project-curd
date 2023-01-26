import React, { useEffect, useState } from "react";
import useStyles from "./style";
import FileBase64 from "react-file-base64";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { addPosts } from "../../data/createPost";
import { usePosts } from "../../data/usePosts";
import { useRecoilState } from "recoil";
import { selectedPostId as selectedPostIdState } from "../../recoil/atom";
import { updatePosts } from "../../data/updatePost";

export default function Form() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { data } = usePosts();
  const [postId, setPostId] = useRecoilState(selectedPostIdState);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  console.log(postData);
  useEffect(() => {
    if (data?.length && postId) {
      const findPost = data?.find((post) => post._id === postId);
      setPostData(findPost);
    }
  }, [data, postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postId) {
      updatePosts(postId, postData, setLoading, clear);
    } else {
      addPosts(postData, setLoading, clear);
    }
  };
  const clear = (e) => {
    setPostId("");
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form}${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {postId ? "Editing" : "Creating"} a memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value?.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          loading={loading}
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          // className={classes.}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
