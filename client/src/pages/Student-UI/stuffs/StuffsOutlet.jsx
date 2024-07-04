import React, { useEffect, useState } from 'react';
import LogoAndNavabar from '../../../components/LogoAndNavabar';
import customFetch from '../../../utils/CustomFetch';
import { toast } from 'react-toastify';
import normalImg from '../../../assets/images/normal.png'
import personalImg from '../../../assets/images/personal.png'
import totalImg from '../../../assets/images/total.png'
import { useLoaderData, useNavigate } from 'react-router-dom';
import StuffContentPage from './StuffContentPage';
import { Box, CircularProgress, Typography, Pagination, Breadcrumbs, Link } from '@mui/material'; // Import Pagination from Mui
import { FeedCountBox, MainBox, StuffMainBox } from '../../../assets/wrappers/StuffPageWrapper';
import NoFeedStuffPage from '../../../components/NoFeedStuffPage';

export const loader = async ({ request }) => {
  try {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const page = searchParams.get('page');

    const response = await customFetch.get("/dashboard-student/feedbacks", {
      params: { page },
    });

    const data = response.data;
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg || "An error occurred while fetching data.");
    return { error };
  }
};



const StuffsOutlet = () => {
  const { data, loading } = useLoaderData();
  console.log(data)
  const normalCount = data.normalFeedbacksCount;
  const personalCount = data.personalFeedbacksCount;
  const numOfPages = data.numOfPages;
  const currentPage = data.currentPage;
  const [loadingData, setLoadingData] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate(); // Import useNavigate

  useEffect(() => {
    if (!loading && data) {
      setFeeds(data.feeds || []);
      setTotal(data.feedsTotal || 0);
      setLoadingData(false);
    }
  }, [loading, data]);

  const handlePageChange = (event, value) => {
    // Update the URL/query parameters
    navigate(`/dashboard-student/stuffs?page=${value}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <>
      <LogoAndNavabar />

      <MainBox>
        <Box>
          {loadingData ? (
            <Box sx={{ display: 'grid', placeItems: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
             
                      <Box sx={{display:'flex',justifyContent:"flex-end",margin:"-2% 0 2% 0"}}>
                        <Breadcrumbs>
                          <Link underline="hover" color="inherit"
                            href="/dashboard-student">
                            Home
                          </Link>
                          <Link
                            underline="hover"
                            color="text.primary"
                            href="/dashboard-student/stuffs"
                            aria-current="page"
                          >
                            user-feeds
                          </Link>
                        </Breadcrumbs>
                      </Box>

                      <Box sx={{
                        display: 'flex', gap: "3%", justifyContent: 'space-between', position: 'relative', "@media (max-width: 900px)": {
                          flexDirection: "column",
                      
                        } }}>
                        <Box sx={{
                          position: 'sticky',
                          top: 0,
                          maxHeight: '80vh', // Limit height to viewport height
                          overflowY: 'auto', // Enable scrolling if needed
                          width: '25%', // Adjust width as needed
                          paddingRight: '20px', // Adjust for scrollbar
                          "@media (max-width: 900px)": {
                            position:'relative',
                            flexDirection: "column",
                            width: '100%', // Adjust for mobile view
                            paddingRight: 0 // No scrollbar on mobile
                          }
                        }}>
                          <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px",
                            "@media (max-width: 900px)": {
                              flexDirection: "column"
                            }
                          }}>
                            <Box sx={{marginBottom:'5%'}}>
                              <Typography variant='h5' sx={{ fontWeight: "600" }}>Feed Details</Typography>
                            </Box>
                      <FeedCountBox variant='h6' sx={{ background:"#387ADF"}}>
                              <Box>
                                <Typography variant='h5' sx={{ fontWeight: "600",color:"white", "@media (max-width: 600px)": { textAlign: "center" } }}>
                                 Count: {normalCount}
                                </Typography>
                                <Typography variant='body1' sx={{ fontWeight: "600", color: "white", "@media (max-width: 600px)": { textAlign: "center" } }}>
                                  Normal Feeds
                                </Typography>
                              </Box>
                              <Box>
                                <img src={normalImg} alt="" height={50} width={50} />
                              </Box>
                            </FeedCountBox>

                      <FeedCountBox variant='h6' sx={{ background: "#0D9276" }}>
                              <Box>
                                <Typography variant='h5' sx={{ fontWeight: "600", color:"white","@media (max-width: 600px)": { textAlign: "center" } }}>
                                 Count: {personalCount}
                                </Typography>
                                <Typography variant='body1' sx={{ fontWeight: "600", color: "white", "@media (max-width: 600px)": { textAlign: "center" } }}>
                                  Personal Feeds
                                </Typography>
                              </Box>
                              <Box>
                                <img src={personalImg} alt="" height={50} width={50} />
                              </Box>
                            </FeedCountBox>

                      <FeedCountBox variant='h6' sx={{ background:"#FF6000"}}>
                              <Box>
                                <Typography variant='h5' sx={{ fontWeight: "600",color:"white", "@media (max-width: 600px)": { textAlign: "center" } }}>
                                 Total: {total}
                                </Typography>
                                <Typography variant='body1' sx={{ fontWeight: "600", color: "white", "@media (max-width: 600px)": { textAlign: "center" } }}>
                                  Total Feeds
                                </Typography>
                              </Box>
                              <Box>
                                <img src={totalImg} alt="" height={50} width={50} />
                              </Box>
                            </FeedCountBox>

                            <Box sx={{marginTop:'5%'}}>
                              <Typography variant='body1' sx={{color:'grey',fontWeight:'600'}}>
                              Note: If you delete your feed once it will delete automatically 
                              in everywhere and personal badge indicates that as a personal feedback</Typography>
                            </Box>

                          </Box>
                        </Box>
                        <Box sx={{
                          width: '70%', "@media (max-width: 600px)": {
                            width: '100%', // Adjust for mobile view
                          } }}>
                  {total === 0 ? (
                    <NoFeedStuffPage />
                  ) : (
                    <>
                          <StuffMainBox>
                            {feeds.map(feed => (
                              <StuffContentPage
                                key={feed._id}
                                _id={feed._id}
                                message={feed.message}
                                createdAt={feed.createdAt}
                                messageType={feed.messageType}
                                loading={loading}
                              />
                            ))}
                          </StuffMainBox>

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
                        </Box>

                      </Box>
            </>
          )}
        </Box>

      </MainBox>
    </>
  );
};

export default StuffsOutlet;
