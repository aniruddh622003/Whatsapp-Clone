import { Box } from "@mui/material";
import React from "react";

const jso = {
  name: "eshaan",
  surname: "dutta",
};

const { name: firstname, surname } = jso;

console.log(firstname + surname);

const SenderMessage = ({ message }) => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "end" }}>
      <Box
        sx={{
          backgroundColor: "hsl(221, 70%, 33%)",
          padding: "10px",
          color: "#fff",
          borderRadius: "20px",
          borderTopRightRadius: "0",
          position: "relative",
          paddingBottom: "20px",
        }}
      >
        {message}
        <Box
          sx={{
            position: "absolute",
            bottom: "5px",
            right: "10px",
            fontSize: "12px",
            fontWeight: "500",
            color: "#ccc",
          }}
        >
          1:52 pm
        </Box>
      </Box>
    </div>
  );
};

export default SenderMessage;
