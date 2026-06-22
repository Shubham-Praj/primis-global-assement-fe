"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import type { UserFormValues } from "./types";

const emptyForm: UserFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

type UserFormDialogProps = {
  initialValues?: UserFormValues;
  mode: "add" | "edit";
  open: boolean;
  onClose: () => void;
  onSubmit: (values: UserFormValues) => void;
};

export default function UserFormDialog({
  initialValues,
  mode,
  open,
  onClose,
  onSubmit,
}: UserFormDialogProps) {
  const [values, setValues] = useState<UserFormValues>(
    initialValues ?? emptyForm,
  );

  const title = mode === "add" ? "Add User" : "Edit User";
  const canSubmit =
    values.firstName &&
    values.lastName &&
    values.email &&
    (mode === "edit" || values.password);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 800, color: "#10213f" }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <Stack component="form" spacing={2.5} sx={{ pt: 1 }}>
          <TextField
            required
            fullWidth
            label="First name"
            name="first_name"
            value={values.firstName}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                firstName: event.target.value,
              }))
            }
          />
          <TextField
            required
            fullWidth
            label="Last name"
            name="last_name"
            value={values.lastName}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                lastName: event.target.value,
              }))
            }
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
          />
          {mode === "add" ? (
            <TextField
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={values.password}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
            />
          ) : null}
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button color="inherit" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => onSubmit(values)}
          disabled={!canSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
