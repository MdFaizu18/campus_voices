import { Box } from "@mui/material";

export const BorderStyle = ({ width }) => {
  return (
    <>

    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width:`${width}px`,
          borderBottom: "2px solid #000050",
        }}
      >      
      </Box>
      <Box
        sx={{
          width:`${width}px`,
          borderBottom: "2px solid orange",
        }}
      >
      </Box >
    </Box >
    </>
  );
};