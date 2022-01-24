import { Box } from "@mui/material";
import React from "react";

const jso = {
  name: "eshaan",
  surname: "dutta",
};

const { name: firstname, surname } = jso;

console.log(firstname + surname);

const SenderMessage = ({ message, time }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "end",
        margin: "15px 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "hsl(221, 70%, 33%)",
          padding: "10px",
          color: "#fff",
          borderRadius: "20px",
          borderTopRightRadius: "0",
          display: "flex",
          alignItems: "end",
          gap: "10px",
          width: "fit-content",
        }}
      >
        {message}
        <Box
          sx={{
            fontSize: "8px",
            fontWeight: "500",
            color: "#ccc",
          }}
        >
          {new Date(time?.toDate()).toUTCString()}
        </Box>
      </Box>
    </div>
  );
};

export default SenderMessage;
