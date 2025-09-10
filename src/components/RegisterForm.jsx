import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/material";

export function RegisterForm() {
  return (
    <Grid
      component="form"
      noValidate
      autoComplete="on"
      sx={{
        backgroundColor: "var(--background-color)",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "flex-start",
        maxWidth: "43rem",
      }}
    >
      <TextField
        required
        id="registerUsername"
        label="Username"
        defaultValue="username"
        helperText="Enter your username"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />
      <TextField
        required
        id="registerPassword"
        label="Choose a password"
        defaultValue="password"
        helperText="Enter your password"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />
      <TextField
        required
        id="confirmPassword"
        label="Confirm your password"
        defaultValue="password"
        helperText="confirm your password"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />
      <TextField
        id="registerFirstName"
        label="First name"
        defaultValue="first name"
        helperText="Enter your first name"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />
      <TextField
        id="registerLastName"
        label="Last Name"
        defaultValue="last name"
        helperText="Enter your last name"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />
      <TextField
        id="registerAge"
        label="Age"
        defaultValue="Age (ex: 28)"
        helperText="Enter your age"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />

      <FormControl
        variant="filled"
        helperText="Enter your gender"
        sx={{ m: 1 }}
      >
        <FormLabel
          sx={{
            marginBottom: "-1.5rem",
            color: "var(--text-color)",
            fontSize: "0.75rem",
            marginLeft: "0.75rem",
          }}
        >
          Gender
        </FormLabel>
        <Select
          labelId="registerGenderLabel"
          id="registerGender"
          value={"Neutral"}
          label="Gender"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          sx={{ width: 209, height: 54 }}
        >
          <MenuItem value="Neutral">Neutral</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
        <FormHelperText
          sx={{ alignSelf: "flex-end", color: "var(--text-color)" }}
        >
          Enter your gender
        </FormHelperText>
      </FormControl>
      <TextField
        id="registerCity"
        label="Enter your city"
        defaultValue="city"
        helperText="Enter the city you live in"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />
      <TextField
        id="registerState"
        label="State"
        defaultValue="state"
        helperText="Enter the state you live in"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)",
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
              width: 209,
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" },
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" },
          },
        }}
      />
      <Button variant="contained" sx={{ height: "fit-content" }}>
        Register
      </Button>
    </Grid>
  );
}
