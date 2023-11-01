import { Grid, Typography } from "@mui/material";
import React from "react";
import * as ReactDom from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export function Admin() {

    const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", width: "250px", background: "#000" }}
      ></Grid>
    </ThemeProvider>
  );
}
