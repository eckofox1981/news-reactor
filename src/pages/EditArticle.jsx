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

const handleChange = (e) => {
  console.log("handleChange" + e);
};

export function EditArticle() {
  return (
    <main>
      <Container
        disableGutters
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          variant="outlined"
          autoComplete="off"
          placeholder="Title"
          label="Title"
          sx={{ width: "60%", color: "var(--text-color)" }}
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
        />
        <TextareaAutosize
          aria-label="minimum-height"
          minRows={6}
          minLength={100}
          placeholder="Write your article here"
          style={{ width: "80%", padding: "1rem", fontSize: "1.25rem" }}
        />
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontSize: "2rem", width: "100%" }}
        >
          Tell us who you are:
        </Typography>
        <Box>
          <TextField
            required
            autoComplete="off"
            placeholder="username"
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
          />
          <TextField
            required
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
          />
          <TextField
            required
            autoComplete="off"
            placeholder="State"
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
          />
          <FormControl fullWidth required>
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={"neutral"}
              label="Gender"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              style={{ width: "20rem" }}
            >
              <MenuItem value={"neutral"}>Neutral</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained">Submit</Button>
      </Container>
    </main>
  );
}
