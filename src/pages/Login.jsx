import { Button, Typography } from "@mui/material";
import { LoginForm } from "../components/LoginForm";
import "../styles/login.css";
import { RegisterForm } from "../components/RegisterForm";
import { useState } from "react";
import { Margin } from "@mui/icons-material";

export function Login() {
  const [hiddenForm, setHiddenForm] = useState("hidden-form");

  const showForm = () => {
    if (hiddenForm === "hidden-form") {
      setHiddenForm("hidden-form show");
    } else {
      setHiddenForm("hidden-form");
    }
  };

  return (
    <main>
      <Typography variant="h3" sx={{ marginBottom: 3 }}>
        Login
      </Typography>
      <LoginForm />
      <br />
      <div className="register-prompt">
        <Typography variant="body1">Not a user? Then it's time to </Typography>
        <Button
          variant="contained"
          onClick={() => {
            showForm();
          }}
        >
          Sign up
        </Button>
      </div>
      <div className={hiddenForm}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }}>
          Register to be able to post your own articles
        </Typography>
        <RegisterForm />
        <Button
          variant="contained"
          onClick={() => {
            showForm();
          }}
          sx={{ margin: 1 }}
        >
          Hide form
        </Button>
      </div>
    </main>
  );
}
