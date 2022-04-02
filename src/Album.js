import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShareIcon from "@mui/icons-material/Share";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function Album() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/658c214e-5978-4e94-960b-6ca5463bc08e?_format=index"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const EditPage = () => (window.location.href = "/data");
  const getUrl = () => console.log(window.location.href.split("/"));
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (rowIndex) => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/658c214e-5978-4e94-960b-6ca5463bc08e/${rowIndex}`,
        {
          method: "Delete"
        }
      );
    } catch (error) {}
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ backgroundColor: "#333" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            style={{ marginRight: "75%" }}
          >
            SS Event Managers
          </Typography>
          <Button
            variant="contained"
            style={{ marginBottom: "20px", marginLeft: "30px" }}
            onClick={() => (window.location.href = "/create")}
            noWrap
            style={{ display: "flex" }}
          >
            Create
            <UpgradeIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        {data.map((items, i) => (
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="h5" align="center" color="text.secondary">
                <h1>{items.Title}</h1>
              </Typography>

              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                <p>{items.Desc}</p>
              </Typography>

              <div className="info">
                <Typography align="center" color="#333" paragraph>
                  <h2>{items.Date}</h2>
                </Typography>

                <Typography align="center" color="#333" paragraph>
                  <h2>{items.Time}</h2>
                </Typography>
              </div>

              <Grid>
                <Button
                  variant="contained"
                  /* onClick={() => {
                    alert("The URL of this page is: " + window.location.href);
                  }} */
                  onClick={getUrl}
                  style={{ marginBottom: "20px" }}
                >
                  Share
                  <ShareIcon />
                </Button>

                <Button
                  variant="contained"
                  style={{ marginBottom: "20px", marginLeft: "30px" }}
                >
                  <Link
                    to={`/data/${i}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Edit
                  </Link>
                  <EditIcon />
                </Button>

                <Button
                  variant="contained"
                  style={{ marginBottom: "20px", marginLeft: "30px" }}
                  onClick={() => handleDelete(i)}
                >
                  Delete
                  <DeleteIcon />
                </Button>

                <Card
                  sx={{
                    height: "90%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <img src={items.ImgUrl} alt={items.Title} />
                </Card>
              </Grid>
            </Container>
          </Box>
        ))}
      </main>
      {/* Footer */}

      <Box sx={{ bgcolor: "#333", color: "#fff" }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          style={{ color: "white", padding: "10px", fontWeight: "bold" }}
        >
          SS Event Managers © All Rights Reserved
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
