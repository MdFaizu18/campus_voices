import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import customFetch from "../../../utils/CustomFetch";
import { CountBox, FeedbackBox, MainContainerBox, PersonalSearchMainBox, SearchMainBox } from "../../../assets/wrappers/AdminStudentFeedbackWrapper";
import FeedbackContentBox from "../student-all-feedback/FeedbackContentBox";
import { useEffect, useState } from "react";
import { Box, Breadcrumbs, CircularProgress, Link, Pagination, Typography } from "@mui/material";
import NoFeedStuffPage from "../../../components/NoFeedStuffPage";
import PersonalSearchContainer from "../../../components/PersonalSearchContainer";
import { toast } from "react-toastify";


export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const { data } = await customFetch.get("/dashboard-admin/personal-feedbacks", { params });
    console.log(data);
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    // If there's an error, handle it
    if (error.response && error.response.status === 403) {
      // throw new Error('Access Denied! You are not authorized to access this page.');
      toast.error("Access Denied")
      return redirect('/')
    } else {
      toast.error("Error occurred while fetching data");
      return redirect('/')
    }
  }
};

const PersonalReviewOutlet = () => {
  const { data, searchValues, loading } = useLoaderData();
  const { sort, startDate, endDate } = searchValues;
  const numOfPages = data.numOfPages;
  const totalFeedbacks = data.personalFeedCount;
  const currentPage = data.currentPage;
  const [loadingData, setLoadingData] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate(); // Import useNavigate

  useEffect(() => {
    if (!loading && data) {
      setFeeds(data.feedbacks || []);
      setTotal(data.personalFeedCount || 0);
      setLoadingData(false);
    }
  }, [loading, data]);

  const handlePageChange = (event, value) => {
    navigate(`/dashboard-head/personal-review?page=${value}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  const handleFormSubmit = (formData) => {
    const {  sort, startDate, endDate } = formData;
    const queryParams = new URLSearchParams();
    if (sort) queryParams.set('sort', sort);
    if (startDate) queryParams.set('startDate', startDate);
    if (endDate) queryParams.set('endDate', endDate);
    // Navigate to the updated URL
    navigate(`/dashboard-head/personal-review?${queryParams.toString()}`);
  };

  return (
    <>
      <MainContainerBox>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/dashboard-head">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/dashboard-head/student-feedbacks">
              Feedbacks
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/dashboard-head/personal-feedbacks"
              aria-current="page"
            >
            Personal Feedbacks
            </Link>
          </Breadcrumbs>
        </Box>
        <PersonalSearchMainBox>
          <PersonalSearchContainer
            sort={sort}
            startDate={startDate}
            endDate={endDate}
            onSubmit={handleFormSubmit} // Pass onSubmit function
          />
        </PersonalSearchMainBox>
        <CountBox>
          <Typography variant="h5" sx={{ background: 'white', padding: '5px 20px', borderLeft: '10px solid navy', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>Count: {totalFeedbacks}</Typography>
        </CountBox>
        {loadingData ? (
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {total === 0 ? (
              <NoFeedStuffPage />
            ) : (
              <>
                <FeedbackBox>
                  {feeds.map(feed => (
                    <FeedbackContentBox
                      key={feed._id}
                      _id={feed._id}
                      message={feed.message}
                      createdAt={feed.createdAt}
                      loading={loading}
                    />
                  ))}
                </FeedbackBox>

                {/* Pagination Component */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Pagination
                    count={numOfPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                  />
                </Box>
              </>
            )}
          </>
        )}
      </MainContainerBox>
    </>
  );
};

export default PersonalReviewOutlet
