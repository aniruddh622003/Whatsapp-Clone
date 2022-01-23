import { Box } from "@mui/material";
import React from "react";

const RecieverMessage = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "start" }}>
      <Box>
        <Box sx={{ fontWeight: "500", fontSize: "12px", marginBottom: "3px" }}>
          message sender
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "20px",
            borderTopLeftRadius: "0",
            position: "relative",
            paddingBottom: "20px",
          }}
        >
          Message Recieved sdjhfzdkfjh
          <Box
            sx={{
              position: "absolute",
              bottom: "3px",
              right: "10px",
              fontSize: "12px",
              fontWeight: "500",
              color: "gray",
            }}
          >
            1:52 pm
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default RecieverMessage;
