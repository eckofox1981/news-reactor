import { Alert, Snackbar } from "@mui/material";
import { useToastStore } from "../store/store";

export function Toast() {
  const toast = useToastStore((store) => store.toast);
  const hideToast = useToastStore((store) => store.hideToast);

  const handleClose = () => {
    hideToast();
  };
  return (
    <Snackbar open={toast.open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={toast.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
}
