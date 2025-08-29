import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      sx={{ bgcolor: "#f9fafb" }}
    >
      <Typography variant="h1" color="primary" fontWeight={700}>
        404
      </Typography>
      <Typography variant="h5" color="text.secondary" mb={2}>
        Oops! The page you are looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
        sx={{ borderRadius: "999px", px: 4 }}
      >
        Go Home
      </Button>
    </Box>
  )
}

export default PageNotFound
