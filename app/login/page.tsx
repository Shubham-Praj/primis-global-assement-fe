"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function LoginPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          minHeight: { xs: 260, md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifycontent: "center",
          px: { xs: 3, sm: 6, md: 10 },
          py: { xs: 8, md: 10 },
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #10213f 0%, #136f63 58%, #d49a3a 100%)",
        }}
      >
        <Stack spacing={3} sx={{ width: "100%", maxWidth: 560 }}>
          <Typography
            component="p"
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 0,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Welcome back
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 40, sm: 52, md: 64 },
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: 0,
              maxWidth: 520,
              overflowWrap: "anywhere",
            }}
          >
            Primis-Global-Assement
          </Typography>
          <Typography
            sx={{
              maxWidth: 440,
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: 16, sm: 18 },
              lineHeight: 1.7,
            }}
          >
            Secure access for assessment workflows, reporting, and team
            management.
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifycontent: "center",
          px: { xs: 2.5, sm: 5, md: 8 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Paper
          component="form"
          elevation={0}
          onSubmit={(event) => event.preventDefault()}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: { xs: 3, sm: 4 },
            border: "1px solid",
            borderColor: "rgba(16, 33, 63, 0.12)",
            boxShadow: "0 24px 70px rgba(16, 33, 63, 0.12)",
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Typography
                component="h2"
                sx={{
                  color: "#10213f",
                  fontSize: { xs: 28, sm: 32 },
                  fontWeight: 800,
                  letterSpacing: 0,
                  mb: 1,
                }}
              >
                Login
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                Enter your credentials to continue.
              </Typography>
            </Box>

            <Divider />

            <TextField
              fullWidth
              required
              id="username"
              name="username"
              label="Username"
              autoComplete="username"
            />

            <TextField
              fullWidth
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ minHeight: 48 }}
            >
              Submit
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
