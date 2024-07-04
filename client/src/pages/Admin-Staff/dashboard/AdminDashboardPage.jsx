import { useLoaderData, useNavigate } from "react-router-dom";
import customFetch from "../../../utils/CustomFetch";
import { CountBox, FeedbackBox, MainContainerBox, SearchMainBox } from "../../../assets/wrappers/AdminStudentFeedbackWrapper";
import FeedbackContentBox from "../../Admin-Head/student-all-feedback/FeedbackContentBox";
import { useEffect, useState } from "react";
import { Box, Breadcrumbs, CircularProgress, Link, Pagination, Typography } from "@mui/material";
import NoFeedStuffPage from "../../../components/NoFeedStuffPage";
import SearchContainer from "../../../components/SearchContainer";


export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const { data } = await customFetch.get("/dashboard-admin/student-feedbacks", { params });
    console.log(data);
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    return error;
  }
};

const AdminDashboardPage = () => {
  const { data, searchValues, loading } = useLoaderData();
  const { search, year, sort, startDate, endDate } = searchValues;
  const numOfPages = data.numOfPages;
  const totalFeedbacks = data.Totalfeedbacks;
  const currentPage = data.currentPage;
  const [loadingData, setLoadingData] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate(); // Import useNavigate

  useEffect(() => {
    if (!loading && data) {
      setFeeds(data.feedbacks || []);
      setTotal(data.Totalfeedbacks || 0);
      setLoadingData(false);
    }
  }, [loading, data]);

  const handlePageChange = (event, value) => {
    navigate(`/dashboard-head/student-feedbacks?page=${value}`);
  };

  const handleFormSubmit = (formData) => {
    const { search, year, sort, startDate, endDate } = formData;
    const queryParams = new URLSearchParams();
    if (search) queryParams.set('search', search);
    if (year) queryParams.set('year', year);
    if (sort) queryParams.set('sort', sort);
    if (startDate) queryParams.set('startDate', startDate);
    if (endDate) queryParams.set('endDate', endDate);

    // Navigate to the updated URL
    navigate(`/dashboard-head/student-feedbacks?${queryParams.toString()}`);
  };

  return (
    <>
      <MainContainerBox>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="text.primary"
              href="/dashboard-admin"
              aria-current="page"
            >
              Feedbacks
            </Link>
          </Breadcrumbs>
        </Box>
        <SearchMainBox>
          <SearchContainer
            search={search}
            year={year}
            sort={sort}
            startDate={startDate}
            endDate={endDate}
            onSubmit={handleFormSubmit} // Pass onSubmit function
          />
        </SearchMainBox>
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
                      name={feed.name}
                      year={feed.year}
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

export default AdminDashboardPage;