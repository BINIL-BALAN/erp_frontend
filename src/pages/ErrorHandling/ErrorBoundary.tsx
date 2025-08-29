import { Component,type ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error Boundary caught:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          textAlign="center"
          sx={{ bgcolor: "#fff5f5" }}
        >
          <Typography variant="h3" color="error" fontWeight={600} mb={1}>
            Something went wrong
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Don’t worry, we’re on it. Try reloading the page.
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={this.handleReload}
            sx={{ borderRadius: "999px", px: 4 }}
          >
            Reload
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

