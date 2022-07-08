import "./styles.css";
import { Box, Stack } from "@mui/material";
import Sidebar from "./Components/sidebar/sidebar";
import Feed from "./Components/feed/feed";
import Rightbar from "./Components/rightbar/rightbar";
import Navbar from "./Components/navbar/navbar";
export default function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}
