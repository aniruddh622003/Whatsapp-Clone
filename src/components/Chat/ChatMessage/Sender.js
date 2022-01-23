import { Box } from "@mui/material";
import React from "react";

const SenderMessage = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "end" }}>
      <Box
        sx={{
          backgroundColor: "hsl(221, 100%, 38%)",
          padding: "10px",
          color: "#fff",
          borderRadius: "20px",
          borderTopRightRadius: "0",
        }}
      >
        Message Sent
      </Box>
    </div>
  );
};

export default SenderMessage;
