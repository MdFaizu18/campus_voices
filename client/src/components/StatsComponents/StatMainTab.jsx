import { Box, Typography } from "@mui/material";
import StatsTabContent from "./StatsTabsContent";
const StatsMainTab = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            mt: "1.5%",
            mb: "%",
            textAlign: "center",
            fontWeight: "600",
            color: "navy",
          }}
        >
          FEED COUNTS
        </Typography>
        <Typography
          sx={{ textAlign: "center", mt: "-15px", fontWeight: "700" }}>
          _____<span style={{ color: "#ff6600" }}>_____</span>
        </Typography>
        <StatsTabContent />
      </Box>
    </>
  );
};

export default StatsMainTab;
