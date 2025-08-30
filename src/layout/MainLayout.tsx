import type { FC } from "react"
import Sidebar from "./Sidebar"
import { alpha, Box, CssBaseline } from "@mui/material";
import AppNavbar from "./Navbar";
// import Header from "./Header";
import { Outlet } from "react-router-dom";
import { LayoutDataProvider } from "../context/LayoutContext";

const MainLayout:FC = ()=>{
  return (
    <LayoutDataProvider>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Box
           sx={{p:2}}
          >
            {/* <Header /> */}
            <Box sx={{p:5}} />
            <Outlet/>
          </Box>
        </Box>
      </Box>
    </LayoutDataProvider>
  );
}

export default MainLayout