import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function create() {
  const [data, setData] = useState({
    Title: "",
    Desc: "",
    Time: "",
    Date: "",
    ImgUrl: ""
  });
  const returnHome = () => (window.location.href = "/");
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/658c214e-5978-4e94-960b-6ca5463bc08e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      if (res.ok) {
        window.location.href = "/";
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
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
        label="New Event Name"
        type="search"
        name="Title"
        style={{ width: "100%", marginTop: "50px", backgroundColor: "white" }}
        onChange={handleChange}
        value={data.Title}
      />

      <TextField
        id="outlined-search"
        label="Event Description"
        name="Desc"
        type="search"
        style={{ width: "100%", marginTop: "50px", backgroundColor: "white" }}
        value={data.Desc}
        onChange={handleChange}
      />

      <TextField
        id="outlined-search"
        label="Event Date"
        type="search"
        name="Time"
        style={{ width: "100%", marginTop: "50px", backgroundColor: "white" }}
        value={data.Time}
        onChange={handleChange}
      />

      <TextField
        id="outlined-search"
        label="Event Time"
        type="search"
        name="Date"
        style={{
          width: "100%",
          marginTop: "50px",
          backgroundColor: "white"
        }}
        value={data.Date}
        onChange={handleChange}
      />

      <TextField
        id="outlined-search"
        label="Event Img Url"
        type="search"
        name="ImgUrl"
        style={{
          width: "100%",
          marginTop: "50px",
          backgroundColor: "white",
          paddingBottom: "50px"
        }}
        value={data.ImgUrl}
        onChange={handleChange}
      />

      <Button
        variant="contained"
        style={{
          width: "20%",
          marginBottom: "50px"
        }}
        onClick={handleSubmit}
        type="submit"
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
