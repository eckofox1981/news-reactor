import { CenterFocusStrong } from "@mui/icons-material";
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
import { UserObject } from "../object/User";
import { Post } from "../object/Post";
import { Tags } from "../components/Tags";
import "../styles/editArticle.css";
import { useMovedTagStore } from "../functionality/store";
import classNames from "classnames";
import AddIcon from "@mui/icons-material/Add";

export function EditArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postsTags, setPostTags] = useState([]);
  const [gender, setGender] = useState("");
  const [tagList, setTagList] = useState([
    "love",
    "instagood",
    "fashion",
    "photooftheday",
    "beautiful",
    "art",
    "photography",
    "happy",
    "picoftheday",
    "cute",
    "follow",
    "tbt",
    "nature",
    "like",
    "travel",
    "style",
    "summer",
    "selfie",
    "food",
    "friends",
  ]);
  const [dropPostTags, setDropPostTags] = useState(false);
  const [dropTagContainer, setDropTagContainerDrop] = useState(false);
  const [newTag, setNewTag] = useState("");

  const movedTag = useMovedTagStore((store) => store.movedTag);
  const setMovedTag = useMovedTagStore((store) => store.setMovedTag);

  const resetArticleInputs = () => {
    setTitle("");
    setBody("");
  };

  const resetAll = () => {
    setTitle("");
    setBody("");
    setUsername("");
    setCity("");
    setState("");
    setGender("neutral");
  };

  const ShowPostTags = () => {
    if (postsTags.length === 0) {
      return <i>Add your tags here</i>;
    }

    return <Tags tags={postsTags} />;
  };

  const manuallyAddingTag = () => {
    if (newTag === "") {
      //TODO: inform user
      console.log("empty tag");
      return;
    }
    if (postsTags.includes(newTag)) {
      //TODO: inform user
      console.log("tag already exist");
      return;
    }
    setPostTags((current) => [...current, newTag]);
    setNewTag("");
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
          marginRight: 0,
          width: "70rem",
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
            width: "50rem",
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
            setTitle(e.target.value);
          }}
        />
        <TextareaAutosize
          value={body}
          aria-label="minimum-height"
          minRows={6}
          minLength={100}
          placeholder="Write your article here"
          style={{
            width: "48rem",
            padding: "1rem",
            fontSize: "1.25rem",
            border: "1px solid var(--text-color)",
            borderRadius: "1rem 1rem 0 1rem ",
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
          }}
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
              setPostTags((current) => [...current, movedTag]);
              setTagList((current) =>
                current.filter((tag) => tag !== movedTag)
              );
              setMovedTag(null);
              setDropPostTags(false);
            }}
            sx={{
              minHeight: "2rem",
              height: "fit-content",
              width: "100%",
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
          <Button variant="contained">Submit</Button>
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
        onDrop={(e) => {
          setTagList((current) => [...current, movedTag]);
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

function saveLocalArticleAndUser(
  title,
  body,
  tags,
  username,
  city,
  state,
  gender
) {
  const users = JSON.parse(localeStorage.getItem("rn-users")) || [];
  const localArticles =
    JSON.parse(localStorage.getItem("local-articles")) || [];
  const user = new UserObject(
    252 + users.length,
    username,
    "",
    "",
    "",
    gender,
    city,
    state,
    "user"
  );
  users.push(user);
  localStorage.setItem("rn-users", JSON.stringify(users));
  const post = new Post(
    252 + localArticles.length,
    title,
    body,
    tags || [],
    0,
    0,
    0,
    user.id
  );
  localArticles.push(post);
  localStorage.setItem("local-articles", JSON.stringify(localArticles));
}
