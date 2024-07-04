import { Box, Breadcrumbs, Link, Typography, styled } from "@mui/material";
import Banner from "../../../assets/images/FeedbackBanner2.jpg";
import FeedbackForm from "./FeedbackForm";
import LogoAndNavabar from "../../../components/LogoAndNavabar";

const BannerImgWrapper = styled("img")({
  height: "280px",
  width: "90%",
  borderRadius: "10px",
  marginTop: "3%",
  marginLeft: "3.5%",
  "@media (max-width: 600px)": { height: "100px", width: "93%" },
});


const FeedOutlet = () => {
  return (
    <>
    <LogoAndNavabar/>
      <Box sx={{ bgcolor: "#F7F7FA", pb: "20px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between',padding:"1% 5%" }}>
      <Box >
        <Typography
          variant="h5"
          sx={{ fontWeight: "Bold", p: "2% 5% 1% 5.1%",display:{sm:"block",xs:"none"} }}
        >
          Feedback
        </Typography>
      </Box>
          <Box sx={{
            "@media (max-width: 1100px)": {
              margin: "2% 5% 5% 0"
            },
          }}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="/dashboard-student">
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/dashboard-student/feedbacks"
                aria-current="page"
              >
                Feedback
              </Link>
            </Breadcrumbs>
          </Box>
      </Box>
        <Box
          sx={{
            m: "1% 5%",
            pl: "2%",
            bgcolor: "white",
            width: "90%",
            borderRadius: "10px",
            pb: "20px",
          }}
        >
          <BannerImgWrapper src={Banner} />
          <Box sx={{ mt: "4%" }}>
            <FeedbackForm />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeedOutlet;