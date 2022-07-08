import "./styles.css";
import { Box, Stack, Button } from "@mui/material";
import Sidebar from "./Components/sidebar/sidebar";
import Feed from "./Components/feed/feed";
import Rightbar from "./Components/rightbar/rightbar";
export default function App() {
  return (
    <>
      <Box>
        <h2>Navbar</h2>
        <Button
          variant="contained"
          sx={{
            color: "red",
            backgroundColor: "green",
            "&hover": {
              backgroundColor: "yellow"
            }
          }}
        >
          Click
        </Button>

        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
}
