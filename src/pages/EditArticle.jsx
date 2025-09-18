import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Tags } from "../components/Tags";
import "../styles/editArticle.css";
import { useMovedTagStore, useToastStore } from "../store/store";
import classNames from "classnames";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { listOfTags } from "../assets/listOfTags";
import { saveLocalArticleAndUser } from "../api/saveArticleAndUser";

export function EditArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postsTags, setPostTags] = useState([]);
  const [gender, setGender] = useState("");
  const [tagList, setTagList] = useState(listOfTags);
  const [dropPostTags, setDropPostTags] = useState(false);
  const [dropTagContainer, setDropTagContainerDrop] = useState(false);
  const [newTag, setNewTag] = useState("");

  const movedTag = useMovedTagStore((store) => store.movedTag);
  const setMovedTag = useMovedTagStore((store) => store.setMovedTag);

  const setToast = useToastStore((store) => store.setToast);

  const navigate = useNavigate();

  const resetArticleInputs = () => {
    setTitle("");
    setBody("");
    setPostTags([]);
  };

  const resetAll = () => {
    setTitle("");
    setBody("");
    setUsername("");
    setCity("");
    setState("");
    setGender("neutral");
    setPostTags([]);
  };

  const ShowPostTags = () => {
    if (postsTags.length === 0) {
      return <i>Drag your tags here (or add manually)</i>;
    }

    return <Tags tags={postsTags} />;
  };

  const manuallyAddingTag = () => {
    if (newTag === "") {
      return;
    }
    if (postsTags.includes(newTag)) {
      return;
    }
    setPostTags((current) => [...current, newTag]);
    setNewTag("");
  };

  const sendTagToTagList = () => {
    if (
      tagList.some(
        (tag) => tag.toLocaleLowerCase() === movedTag.toLocaleLowerCase()
      )
    ) {
      setToast({
        open: true,
        message: "Tag already exists in the list.",
        severity: "warning",
      });
    } else {
      setTagList((current) => [...current, movedTag]);
    }
  };

  const sendTagToPostTags = () => {
    if (
      postsTags.some(
        (tag) => tag.toLocaleLowerCase() === movedTag.toLocaleLowerCase()
      )
    ) {
      setToast({
        open: true,
        message: "Tag already exists in the list.",
        severity: "warning",
      });
    } else {
      setPostTags((current) => [...current, movedTag]);
    }
  };

  const saveArticle = () => {
    const articleId = saveLocalArticleAndUser(
      title,
      body,
      postsTags,
      username,
      city,
      state,
      gender
    );

    if (articleId) {
      setToast({
        open: true,
        message: "Article saved. Redirecting.",
        severity: "success",
      });
      navigate(`/article/${articleId}`);
    } else {
      setToast({
        open: true,
        message: "Error saving article, make sure all fields are completed.",
        severity: "error",
      });
    }
  };

  return (
    <main id="edit-main">
      <Container
        disableGutters
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "50rem",
          "@media (max-width:600px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: 700, fontSize: "3rem" }}
        >
          Why bother with fact checking when you can write whatever you want?
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontSize: "2rem", width: "100%" }}
        >
          Fill the form below and let us now what is really true in the news
          world.
        </Typography>
        <TextField
          required
          value={title}
          variant="outlined"
          autoComplete="off"
          placeholder="Title"
          label="Title"
          slotProps={{
            input: {
              sx: {
                fontSize: "1.5rem",
                color: "var(--text-color)",
                "&::placeholder": {
                  color: "var(--text-color)",
                  opacity: 0.7,
                },
              },
            },
            inputLabel: {
              sx: {
                color: "var(--text-color)",
                "&.Mui-focused": {
                  color: "var(--text-color)",
                },
              },
            },
          }}
          sx={{
            width: "40rem",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "var(--text-color)",
              },
              "&:hover fieldset": {
                borderColor: "var(--text-color)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--text-color)",
              },
            },
            "@media (max-width:725px)": {
              width: "25rem",
            },
            "@media (max-width:600px)": {
              width: "100%",
            },
          }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextareaAutosize
          className="body-input"
          value={body}
          aria-label="minimum-height"
          minRows={6}
          minLength={100}
          placeholder="Write your article here"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <section className="add-tag">
          <Box
            className={classNames("post-tag", { drop: dropPostTags })}
            onDragOver={(e) => {
              e.preventDefault();
              setDropPostTags(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setDropPostTags(false);
            }}
            onDrop={(e) => {
              sendTagToPostTags();
              setTagList((current) =>
                current.filter((tag) => tag !== movedTag)
              );
              setMovedTag(null);
              setDropPostTags(false);
            }}
            sx={{
              minHeight: "2rem",
              height: "fit-content",
              width: "20rem",
              border: "1px solid var(--text-color)",
              borderRadius: "1rem",
              padding: "0.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(113, 113, 113)",
            }}
          >
            <ShowPostTags />
          </Box>
          <input
            value={newTag}
            id="new-tag-input"
            type="text"
            placeholder="new tag"
            onChange={(e) => {
              setNewTag(e.target.value);
            }}
          />
          <AddIcon
            sx={{
              backgroundColor: "lightGreen",
              borderRadius: "50%",
              height: "2rem",
              width: "2rem",
            }}
            onClick={() => manuallyAddingTag()}
          />
        </section>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontSize: "2rem", width: "100%" }}
        >
          Tell us who you are:
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <TextField
            required
            value={username}
            autoComplete="off"
            placeholder="username"
            label="username"
            style={{ width: "20rem" }}
            slotProps={{
              input: {
                sx: {
                  fontSize: "1.5rem",
                  color: "var(--text-color)",
                  "&::placeholder": {
                    color: "var(--text-color)",
                    opacity: 0.7,
                  },
                },
              },
              inputLabel: {
                sx: {
                  color: "var(--text-color)",
                  "&.Mui-focused": {
                    color: "var(--text-color)",
                  },
                },
              },
            }}
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-color)",
                },
              },
            }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            required
            value={city}
            label="City"
            autoComplete="off"
            placeholder="City"
            style={{ width: "20rem" }}
            slotProps={{
              input: {
                sx: {
                  fontSize: "1.5rem",
                  color: "var(--text-color)",
                  "&::placeholder": {
                    color: "var(--text-color)",
                    opacity: 0.7,
                  },
                },
              },
              inputLabel: {
                sx: {
                  color: "var(--text-color)",
                  "&.Mui-focused": {
                    color: "var(--text-color)",
                  },
                },
              },
            }}
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-color)",
                },
              },
            }}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            required
            value={state}
            autoComplete="off"
            label="state / country"
            placeholder="State / country"
            style={{ width: "20rem" }}
            slotProps={{
              input: {
                sx: {
                  fontSize: "1.5rem",
                  color: "var(--text-color)",
                  "&::placeholder": {
                    color: "var(--text-color)",
                    opacity: 0.7,
                  },
                },
              },
              inputLabel: {
                sx: {
                  color: "var(--text-color)",
                  "&.Mui-focused": {
                    color: "var(--text-color)",
                  },
                },
              },
            }}
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-color)",
                },
              },
            }}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <FormControl
            fullWidth
            required
            sx={{
              width: "20rem",
              "& .MuiOutlinedInput-root": {
                color: "var(--text-color)",
                "& fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--text-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-color)",
                },
              },
            }}
          >
            <InputLabel
              id="gender-select-label"
              sx={{
                color: "var(--text-color)",
                "&.Mui-focused": {
                  color: "var(--text-color)",
                },
              }}
            >
              Gender
            </InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              label="Gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              sx={{
                color: "var(--text-color)",
                "& .MuiSelect-icon": { color: "var(--text-color)" },
              }}
            >
              <MenuItem value={"neutral"}>Neutral</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              saveArticle();
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--special-color)",
              marginLeft: "5rem",
            }}
            onClick={() => {
              resetArticleInputs();
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--special-color)",
              marginLeft: "0.5rem",
            }}
            onClick={() => {
              resetAll();
            }}
          >
            All
          </Button>
        </Box>
      </Container>
      <Box
        onDragOver={(e) => {
          e.preventDefault();
          setDropTagContainerDrop(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDropTagContainerDrop(false);
        }}
        onDrop={() => {
          sendTagToTagList();
          setPostTags((current) => current.filter((tag) => tag !== movedTag));
          setMovedTag(null);
          setDropTagContainerDrop(false);
        }}
        className={classNames("tag-container", { drop: dropTagContainer })}
        sx={{
          width: "8rem",
          boxShadow: "2px 2px 10px var(--text-color)",
          marginLeft: 0,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
          }}
        >
          Drag some tags
        </Typography>
        <Tags tags={tagList} />
      </Box>
    </main>
  );
}
