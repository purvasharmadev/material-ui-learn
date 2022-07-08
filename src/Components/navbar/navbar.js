import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import { useState } from "react";
import ForumIcon from "@mui/icons-material/Forum";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  });

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Navbar
          </Typography>
          <ForumIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            onClick={(e) => setOpen(true)}
          />
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          // anchorEl={}
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
}
