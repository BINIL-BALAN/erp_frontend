import {  type Dispatch, type SetStateAction } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function FileDropZone({files,setFiles}:{files:File[],setFiles:Dispatch<SetStateAction<File[]>>}) {

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <Box width="100%" mx="auto">
      <Paper
        elevation={3}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        sx={{
          width:"100%",
          p: 2,
          border: "2px dashed #9e9e9e",
          borderRadius: 3,
          textAlign: "center",
          cursor: "pointer",
          transition: "0.2s",
          "&:hover": {
            borderColor: "primary.main",
            backgroundColor: "action.hover",
          },
        }}
      >
        <Grid container justifyContent="space-between">
          {/* Left: Drop Zone Text */}
          <Grid size={{md:6,sm:12}}>
            <input
              type="file"
              multiple
              hidden
              id="fileInput"
              onChange={handleFileInput}
            />
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
              <Typography variant="h6" gutterBottom>
                Upload Files
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong style={{ color: "#1976d2" }}>Click to browse</strong> or
                drag & drop files here
              </Typography>
            </label>
          </Grid>

          {/* Right: File List */}
          <Grid size={{md:6,sm:12}}>
            {files.length > 0 ? (
              <List
                dense
                sx={{
                  width: "100%",
                  maxHeight: 200,
                  overflowY: "auto",
                  bgcolor: "background.paper",
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                {files.map((file, index) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton edge="end" onClick={() => removeFile(index)}>
                        <Delete color="error" />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={file.name}
                      secondary={`${(file.size / 1024).toFixed(1)} KB`}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                No files uploaded yet
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
