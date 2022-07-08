import "./styles.css";
import { Box, Stack, Button, styled } from "@mui/material";
import Sidebar from "./Components/sidebar/sidebar";
import Feed from "./Components/feed/feed";
import Rightbar from "./Components/rightbar/rightbar";
export default function App() {
  //BOX: acts like a div with predefined margin and padding
  // Stack: a flex container for 1d layout
  // Button: variant: type of btn, sx={{used to give custom styles}}

  //  How to use emotion-react or styled-components to create custom components
  /*
  1. import {styled} from "@mui/material"
  2.define a const 
  3. use styled("Any MUI component/any HTML element",{
    //give your styles here
  })
  */

  const MyBtn = styled(Button)({
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "grey",
      color: "black"
    },
    "&:disabled": {
      backgroundColor: "blue"
    }
  });

  return (
    <>
      <Box>
        <h2>Navbar</h2>
        <MyBtn disabled>click here</MyBtn>
        {/* <Button
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
        </Button> */}

        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
}
