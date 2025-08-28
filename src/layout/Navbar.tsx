import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiToolbar from "@mui/material/Toolbar";
import { tabsClasses } from "@mui/material/Tabs";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ColorModeIconDropdown from "../theme/ColorModeIconDropdown";
import MenuButton from "../components/MenuButton";
import NavbarBreadcrumbs from "../components/NavbarBreadcrumbs";
import Search from "../components/Search";
import CustomDatePicker from "../components/CustomDatePicker";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Typography from '@mui/material/Typography';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SideMenuMobile from '../components/SideMenuMobile';
import { drawerWidth } from "../constant";
import { useLayoutData } from "../hooks";
const Toolbar = styled(MuiToolbar)({
  width: "100%",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "12px",
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: "8px",
    p: "8px",
    pb: 0,
  },
});

export default function AppNavbar() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false);
  const {toggle} = useLayoutData()
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        // display: { xs: "auto", md: "auto" },
        boxShadow: 1,
        bgcolor: "white",
        backgroundImage: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        top: "var(--template-frame-height, 0px)",
      }}
    >
      <Toolbar variant="regular">
        <Stack
          direction="row"
          sx={{
            display:{xs:"auto",md:"none"},
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: 'center', mr: 'auto' }}
          >
            <CustomIcon />
            <Typography variant="h4" component="h1" sx={{ color: 'text.primary' }}>
              Dashboard
            </Typography>
          </Stack>
          <ColorModeIconDropdown />
          <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </MenuButton>
          <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: { xs: "none", md: "flex" },
            width: "100%",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            maxWidth: { sm: "100%", md: "1700px" },
            pt: 1,
          }}
          spacing={2}
        >
          <Stack direction={"row"} spacing={2} sx={{pl:toggle ? `${drawerWidth}px` : `calc(${theme.spacing(7)} + 1px)`,alignItems:"center"}}>
             <NavbarBreadcrumbs />
          </Stack>
          <Stack direction="row" sx={{ gap: 1 }}>
            <Search />
            <CustomDatePicker />
            <MenuButton showBadge aria-label="Open notifications">
              <NotificationsRoundedIcon />
            </MenuButton>
            <ColorModeIconDropdown />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export function CustomIcon() {
  return (
    <Box
      sx={{
        width: "1.5rem",
        height: "1.5rem",
        bgcolor: "black",
        borderRadius: "999px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundImage:
          "linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)",
        color: "hsla(210, 100%, 95%, 0.9)",
        border: "1px solid",
        borderColor: "hsl(210, 100%, 55%)",
        boxShadow: "inset 0 2px 5px rgba(255, 255, 255, 0.3)",
      }}
    >
      <DashboardRoundedIcon color="inherit" sx={{ fontSize: "1rem" }} />
    </Box>
  );
}
