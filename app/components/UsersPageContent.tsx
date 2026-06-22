"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import UserFormDialog from "./UserFormDialog";
import UsersPagination from "./UsersPagination";
import UsersTable from "./UsersTable";
import type { UserFormValues, UserRecord } from "./types";

const initialUsers: UserRecord[] = [
  {
    id: 1,
    firstName: "Aarav",
    lastName: "Sharma",
    email: "aarav.sharma@primisglobal.com",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Maya",
    lastName: "Iyer",
    email: "maya.iyer@primisglobal.com",
    status: "Active",
  },
  {
    id: 3,
    firstName: "Kabir",
    lastName: "Mehta",
    email: "kabir.mehta@primisglobal.com",
    status: "Inactive",
  },
  {
    id: 4,
    firstName: "Diya",
    lastName: "Nair",
    email: "diya.nair@primisglobal.com",
    status: "Active",
  },
  {
    id: 5,
    firstName: "Rohan",
    lastName: "Kapoor",
    email: "rohan.kapoor@primisglobal.com",
    status: "Active",
  },
  {
    id: 6,
    firstName: "Sara",
    lastName: "Khan",
    email: "sara.khan@primisglobal.com",
    status: "Inactive",
  },
  {
    id: 7,
    firstName: "Vihaan",
    lastName: "Reddy",
    email: "vihaan.reddy@primisglobal.com",
    status: "Active",
  },
];

export default function UsersPageContent() {
  const [users, setUsers] = useState<UserRecord[]>(initialUsers);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserRecord | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const pageCount = Math.max(1, Math.ceil(users.length / rowsPerPage));
  const currentPage = Math.min(page, pageCount - 1);
  const visibleUsers = users.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage,
  );

  const formValues = useMemo<UserFormValues | undefined>(() => {
    if (!editingUser) {
      return undefined;
    }

    return {
      firstName: editingUser.firstName,
      lastName: editingUser.lastName,
      email: editingUser.email,
      password: "",
    };
  }, [editingUser]);

  const handleOpenAddDialog = () => {
    setEditingUser(null);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingUser(null);
  };

  const handleSubmit = (values: UserFormValues) => {
    if (editingUser) {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
              }
            : user,
        ),
      );
    } else {
      setUsers((currentUsers) => [
        {
          id: Date.now(),
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          status: "Active",
        },
        ...currentUsers,
      ]);
      setPage(0);
    }

    handleCloseDialog();
  };

  const handleDelete = (userId: number) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId ? { ...user, status: "Inactive" } : user,
      ),
    );
  };

  const handlePermanentDelete = (userId: number) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== userId),
    );
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        px: { xs: 2, sm: 4, lg: 8 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Stack spacing={3} sx={{ mx: "auto", maxWidth: 1180 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                color: "#10213f",
                fontSize: { xs: 30, sm: 36 },
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              Users
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 0.75 }}>
              Manage user records and account access.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<AddRoundedIcon />}
            onClick={handleOpenAddDialog}
            sx={{ minHeight: 44, px: 2.5 }}
          >
            Add User
          </Button>
        </Stack>

        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
            border: "1px solid",
            borderColor: "rgba(16, 33, 63, 0.12)",
            boxShadow: "0 24px 70px rgba(16, 33, 63, 0.10)",
          }}
        >
          <UsersTable
            users={visibleUsers}
            onEdit={(user) => {
              setEditingUser(user);
              setDialogOpen(true);
            }}
            onDelete={handleDelete}
            onPermanentDelete={handlePermanentDelete}
          />
          <UsersPagination
            count={users.length}
            page={currentPage}
            pageCount={pageCount}
            rowsPerPage={rowsPerPage}
            onPageChange={setPage}
            onRowsPerPageChange={(nextRowsPerPage) => {
              setRowsPerPage(nextRowsPerPage);
              setPage(0);
            }}
          />
        </Paper>
      </Stack>

      {dialogOpen ? (
        <UserFormDialog
          key={editingUser ? `edit-${editingUser.id}` : "add"}
          mode={editingUser ? "edit" : "add"}
          open={dialogOpen}
          initialValues={formValues}
          onClose={handleCloseDialog}
          onSubmit={handleSubmit}
        />
      ) : null}
    </Box>
  );
}
