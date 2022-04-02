import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function delete1() {
  const returnHome = () => (window.location.href = "/");
  return (
    <AppBar
      position="relative"
      style={{ backgroundColor: "white", padding: "0 10px", margin: "0" }}
    >
      <Toolbar style={{ backgroundColor: "#333" }}>
        <Typography variant="h6" noWrap>
          SS Event Managers
        </Typography>
      </Toolbar>

      <TextField
        id="outlined-search"
        label="Event Name To be Deleted"
        type="search"
        style={{
          width: "100%",
          marginTop: "50px",
          backgroundColor: "white",
          marginBottom: "50px"
        }}
      />

      <Button
        variant="contained"
        style={{ width: "20%", marginBottom: "50px" }}
      >
        Submit
      </Button>

      <Button
        variant="contained"
        style={{ width: "20%", marginBottom: "50px" }}
        onClick={returnHome}
        type="submit"
      >
        Return Home
      </Button>
    </AppBar>
  );
}

export default delete1;
