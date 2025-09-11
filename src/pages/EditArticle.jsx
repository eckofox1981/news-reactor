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

export function EditArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");

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

  return (
    <main>
      <Container
        disableGutters
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
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
            width: "60%",
            padding: "1rem",
            fontSize: "1.25rem",
            borderRadius: "1rem 1rem 0 1rem ",
          }}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
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
                color: "var(--text-color)", // selected text
                "& fieldset": {
                  borderColor: "var(--text-color)", // default border
                },
                "&:hover fieldset": {
                  borderColor: "var(--text-color)", // hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-color)", // focused border
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
                color: "var(--text-color)", // selected text
                "& .MuiSelect-icon": { color: "var(--text-color)" }, // the dropdown arrow
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
    </main>
  );
}
