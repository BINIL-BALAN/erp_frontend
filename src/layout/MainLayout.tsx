import type { FC } from "react"
import Sidebar from "./Sidebar"
import { alpha, Box, CssBaseline, Stack } from "@mui/material";
import AppNavbar from "./Navbar";
// import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout:FC = ()=>{
  return (
    <>
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
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            {/* <Header /> */}
            <Box sx={{p:5}} />
            <Outlet/>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default MainLayout