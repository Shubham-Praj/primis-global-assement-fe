"use client";

import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { UserRecord } from "./types";

type UsersTableProps = {
  users: UserRecord[];
  onDelete: (userId: number) => void;
  onEdit: (user: UserRecord) => void;
  onPermanentDelete: (userId: number) => void;
};

export default function UsersTable({
  users,
  onDelete,
  onEdit,
  onPermanentDelete,
}: UsersTableProps) {
  return (
    <TableContainer sx={{ overflowX: "auto" }}>
      <Table sx={{ minWidth: 760 }} aria-label="users table">
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                bgcolor: "#f3f6f8",
                color: "#10213f",
                fontWeight: 800,
                whiteSpace: "nowrap",
              },
            }}
          >
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              hover
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                <Typography sx={{ fontWeight: 700 }}>
                  {user.firstName} {user.lastName}
                </Typography>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Chip
                  label={user.status}
                  size="small"
                  color={user.status === "Active" ? "primary" : "default"}
                  variant={user.status === "Active" ? "filled" : "outlined"}
                />
              </TableCell>
              <TableCell align="right">
                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{ justifyContent: "flex-end" }}
                >
                  <Tooltip title="Edit user">
                    <IconButton
                      aria-label={`Edit ${user.firstName} ${user.lastName}`}
                      color="primary"
                      onClick={() => onEdit(user)}
                    >
                      <EditRoundedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete user">
                    <IconButton
                      aria-label={`Delete ${user.firstName} ${user.lastName}`}
                      color="warning"
                      onClick={() => onDelete(user.id)}
                    >
                      <DeleteOutlineRoundedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Permanent delete">
                    <IconButton
                      aria-label={`Permanent delete ${user.firstName} ${user.lastName}`}
                      color="error"
                      onClick={() => onPermanentDelete(user.id)}
                    >
                      <DeleteForeverRoundedIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
