import { Box, Button, colors, TextField } from "@mui/material";

export function LoginForm() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="on"
      sx={{
        backgroundColor: "var(--background-color)",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        required
        id="usermnameInput"
        label="Username"
        defaultValue="username"
        helperText="Enter your username"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)", // input text
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" }, // label
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" }, // helper text
          },
        }}
      />
      <TextField
        required
        id="passwordInput"
        label="Password"
        defaultValue="password"
        helperText="Enter your password"
        variant="filled"
        slotProps={{
          input: {
            sx: {
              color: "var(--text-color)", // input text
              "&:before": { borderBottomColor: "var(--text-color)" },
              "&:after": { borderBottomColor: "var(--text-color)" },
            },
          },
          inputLabel: {
            sx: { color: "var(--text-color)" }, // label
          },
          formHelperText: {
            sx: { color: "var(--accetextnt-color)", alignSelf: "flex-end" }, // helper text
          },
        }}
      />
      <Button variant="contained" sx={{ height: "fit-content" }}>
        Submit
      </Button>
    </Box>
  );
}
