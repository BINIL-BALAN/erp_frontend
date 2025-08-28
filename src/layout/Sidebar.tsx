import { styled, type CSSObject, type Theme } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import {
  Box,
  Divider,
  Stack,
  Typography,
  Avatar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuContent from "../components/MenuContent";
import CardAlert from "../components/CardAlert";
import OptionsMenu from "../components/OptionsMenu";
import { drawerWidth } from "../constant";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLayoutData } from "../hooks";
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const { toggle, toggleIn, toggleOut } = useLayoutData();
  return (
    <Drawer
      open={toggle}
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      {/* Toolbar with logo + toggle button */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: toggle ? "flex-start" : "center",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          px: 1,
          position: "relative", // make toolbar the positioning parent
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {toggle ? (
            <img
              style={{ width: "70%", height: "50%" }}
              src="google-large.png"
            />
          ) : (
            <Avatar
              onClick={toggleOut}
              sx={{ width: 27, height: 27, cursor: "pointer" }}
              src="google-small.webp"
            />
          )}

          {/* Toggle button floating on border */}

          {toggle && (
            <IconButton
              onClick={toggleIn}
              sx={{
                border: 0,
                width: 32,
                height: 32,
                borderRadius: "50%",
                 bgcolor: "grey.100",
                "&:hover": {
                  bgcolor: "grey.200",
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
        </Stack>
      </Toolbar>

      <Divider />

      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <MenuContent />
       {toggle && <CardAlert />}
      </Box>

      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        {toggle && (
          <Box sx={{ mr: "auto" }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Riley Carter
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              riley@email.com
            </Typography>
          </Box>
        )}
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
