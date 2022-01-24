import { Box } from "@mui/material";
import React from "react";

const RecieverMessage = ({ message, name, time }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "start",
        margin: "15px 0",
        alignItems: "start",
      }}
    >
      <Box>
        <Box sx={{ fontWeight: "500", fontSize: "12px", marginBottom: "3px" }}>
          {name}
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "20px",
            borderTopLeftRadius: "0",
            display: "flex",
            alignItems: "end",
            gap: "10px",
            width: "fit-content",
          }}
        >
          {message}
          <Box
            sx={{
              fontSize: "10px",
              fontWeight: "500",
              color: "gray",
            }}
          >
            {new Date(time?.toDate()).toUTCString()}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default RecieverMessage;
