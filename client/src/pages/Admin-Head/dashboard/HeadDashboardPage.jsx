import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import StudentReviews from "./StudentReviews";
import img4 from "../../../assets/images/userprofile/star03.jpg";
import img3 from "../../../assets/images/adminTwo.jpg";
import img5 from "../../../assets/images/adminFour.jpg";
import customFetch from "../../../utils/CustomFetch.js";
import {
  ImgItemSets3,
  ItemSets,
  OrangeButtons,
} from "../../../assets/wrappers/HeadDashboardWrapper";

import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import DashboardLayer1 from "../../../components/adminDashboard/DashboardLayer1.jsx";
import DashboardLayer2 from "../../../components/adminDashboard/DashboardLayer2.jsx";
// import DashboardLayer2 from "../../components/HeadComponents/PageComponents/AdminDashboard/DashboardLayer2";
import { BorderStyle } from "./StatsPage";
import { useHeadDashboardContext } from "./HeadDashboard.jsx";
import Footer from "../../../components/Footer.jsx";

// export const loader = async () => {
//   try {
//     const { data } = await customFetch.get("/dashboard-student/ratings");
//     return data;
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return redirect("/dashboard-head");
//   }
// };

export default function HeadDashboardPage() {
  const { statsData, departRatings, staffLists }=useHeadDashboardContext();
  console.log(statsData)
  console.log(departRatings)
  console.log(staffLists)
  const {totalRating,totalRatingsCount}=departRatings;
  const AvgRating = totalRating/totalRatingsCount;

  const handleLinkClick = () => {
    scroll.scrollToTop();
  };

  return (
    <>

    <Box sx={{ padding: "2% 10%" }}>
      <DashboardLayer1 />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={6}
          sx={{ padding: "5% 0%" }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={5}>
            <StudentReviews />
          </Grid>
          <Grid item xs={7} sx={{}}>
            <Grid item xs={12}>
              <ItemSets
                sx={{
                  "@media (max-width: 600px)": {
                    display: "flex",
                    gap: "10%",
                  },
                }}
              >
                <img
                  src={img3}
                  height="145px"
                  style={{ flex: 0, padding: "1%", margin: "12px" }}
                />

                <Link
                  to="/dashboard-head/staffs-list"
                  style={{
                    textDecoration: "none",
                    padding: "20px",
                    flex: 1,
                    color: "black",
                    "@media (max-width: 600px)": {},
                  }}
                // onMouseEnter={handleMouseEnter} // Set hover state to true on mouse enter
                // onMouseLeave={handleMouseLeave} // Set hover state to false on mouse leave
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      marginLeft: "-80px",
                      marginBottom: "10px",
                      fontWeight: "600",
                      fontSize: "20px",
                      display: "grid",
                    }}
                  >
                    STAFF LIST
                    <BorderStyle width={30} />
                  </Typography>
                  <Typography
                    sx={{
                      wordSpacing: "2px",
                      fontSize: "15px",
                      "@media (max-width: 600px)": {
                        display: "none",
                      },
                    }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nisi unde modi consequuntur?
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: "-80px",
                      marginTop: "-10px",
                    }}
                  >
                    <OrangeButtons onClick={handleLinkClick} sx={{ borderRadius: "5px" }}>
                      View Staff
                    </OrangeButtons>
                  </Box>
                </Link>
              </ItemSets>
            </Grid>
            <Grid container columnSpacing={5} sx={{ marginTop: "5.5%" }}>
              <Grid item xs={6}>
                <Link
                  to="/dashboard-head/staff-reviews"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textShadow: "2px 2px 9px white",
                    fontSize: "15px",
                    fontWeight: "bold",
                    "&:hover": {},
                  }}
                >
                <ItemSets>
                  <Box sx={{ display: "flex", alignItems: "center" ,justifyContent:"space-between"}}>
                    <ImgItemSets3
                      src={img4}
                      style={{ height: "150px", padding: "10px" }}
                    />
                  </Box>
                  <Typography
                  onClick={handleLinkClick}
                    sx={{
                      textAlign: "center",
                      marginLeft: "10px",
                      marginTop: "22%",
                      fontWeight: "600",
                      fontSize: "20px",
                      display: "grid",
                    }}
                  >
            
                      Staffs Review
                  </Typography>
                </ItemSets>
                    </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  to="/dashboard-head/add-staffs"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                <ItemSets sx={{}}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ImgItemSets3 src={img5} style={{ height: "130px" }} />
                  </Box>
                  <Typography
                    onClick={handleLinkClick}
                    sx={{
                      textAlign: "center",
                      marginLeft: "10px",
                      marginTop: "22%",
                      fontWeight: "600",
                      fontSize: "20px",
                      display: "grid",
                    }}
                  >
                 
                      Add Staff
                  </Typography>
                </ItemSets>
                    </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <DashboardLayer2 />
    </Box>
      {/* <Footer/> */}

    </>
  );
}