import { Grid, Typography, TextField } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContet="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>
        <form>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Correo"
                type="email"
                placeholder="email@test.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Email"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <button>Login</button>
        </form>
      </Grid>
    </Grid>
  );
};
