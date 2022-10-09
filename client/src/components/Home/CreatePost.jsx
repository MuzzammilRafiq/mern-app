import Button from "@mui/material/Button";
import { AddBoxRounded } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/post/",
        { text },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      setText("");
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="createPost">
      <AddBoxRounded onClick={handleClickOpen} style={{ cursor: "pointer" }} />
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}>X</Button>
        </DialogActions>
        <DialogTitle>Add Your Post</DialogTitle>
        <DialogContent sx={{ width: 500 }}>
          <DialogContentText></DialogContentText>
          {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
          <textarea
            cols="45"
            rows="15"
            className="addpost_text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSubmit}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreatePost;
