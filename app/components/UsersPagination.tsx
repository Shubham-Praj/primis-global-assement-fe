"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";

type UsersPaginationProps = {
  count: number;
  page: number;
  pageCount: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
};

export default function UsersPagination({
  count,
  page,
  pageCount,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: UsersPaginationProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={1.5}
      sx={{
        alignItems: { xs: "stretch", md: "center" },
        borderTop: "1px solid rgba(16, 33, 63, 0.10)",
        justifyContent: "space-between",
        px: { xs: 2, sm: 3 },
        py: 1.5,
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {count} records | Page {page + 1} of {pageCount}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
        <TablePagination
          component="div"
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          showFirstButton
          showLastButton
          onPageChange={(_, nextPage) => onPageChange(nextPage)}
          onRowsPerPageChange={(event) => {
            onRowsPerPageChange(Number(event.target.value));
          }}
          labelDisplayedRows={({ from, to, count: total }) =>
            `${from}-${to} of ${total}`
          }
          sx={{
            border: 0,
            ".MuiTablePagination-toolbar": {
              flexWrap: "wrap",
              gap: 1,
              minHeight: 44,
              p: 0,
            },
            ".MuiTablePagination-spacer": {
              display: "none",
            },
          }}
        />
      </Box>
    </Stack>
  );
}
