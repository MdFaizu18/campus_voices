import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'; // Importing SnackbarProvider
// to import react pages 
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import DashboardStudent from './pages/DashboardStudent';
import StudentOutlet from './pages/Student-UI/student/StudentOutlet';
import About from './pages/About';
import StaffOutlet from './pages/Student-UI/staff/StaffOutlet'
import StuffsOutlet from './pages/Student-UI/stuffs/StuffsOutlet';
import FeedOutlet from './pages/Student-UI/feed-compose/FeedOutlet';
import HeadDashboardPage from './pages/Admin-Head/dashboard/HeadDashboardPage';
import HeadDashboard from './pages/Admin-Head/dashboard/HeadDashboard';
import AddStaffs from './pages/Admin-Head/add-staffs/AddStaffs';
import PersonalReviewOutlet from './pages/Admin-Head/student-personal-feeds/PersonalReviewOutlet';
import StudentFeedbacks from './pages/Admin-Head/student-all-feedback/StudentFeedbacks';
import AdminDashboard from './pages/Admin-Staff/dashboard/AdminDashboard';
import AdminDashboardPage from './pages/Admin-Staff/dashboard/AdminDashboardPage';

// to import actions and loaders 
// import {action as registerAction} from './pages/Register';
import {action as staffStarRatingAction} from './pages/Student-UI/staff/StaffOutlet'
// import {action as loginAction} from './pages/Login';
import {action as AddStaffAction } from './pages/Admin-Head/add-staffs/AddStaffs';
// import {action as feedAction} from './pages/Student-UI/feed-compose/FeedOutlet';
import {action as deleteAction} from './components/DeleteFeed';
import {action as deleteStaffAction} from './components/DeleteStaffs';
import {action as editStaffAction} from './pages/Admin-Head/staff-list/EditStaff';
import {loader as editStaffLoader} from './pages/Admin-Head/staff-list/EditStaff';
import {loader as staffListLoader} from './pages/Admin-Head/staff-list/StaffList'
import {loader as personalfeedLoader} from './pages/Admin-Head/student-personal-feeds/PersonalReviewOutlet';
import {loader as studentLoader} from './pages/DashboardStudent';
import {loader as reviewStaffLoader} from './pages/Admin-Head/staff-review/ReviewStaffListPage'
import {loader as StudentStaffRatings} from './pages/Student-UI/staff/StaffOutlet'
import {loader as userProfileLoader} from './pages/Student-UI/user-profile/ProfileOutlet';
import {loader as headLoader} from './pages/Admin-Head/dashboard/HeadDashboard'
import {loader as StaffDashboardLoader } from './pages/Admin-Staff/dashboard/AdminDashboardPage';
import {loader as stuffLoader} from './pages/Student-UI/stuffs/StuffsOutlet';
import {loader as H_FeedbackLoader } from './pages/Admin-Head/student-all-feedback/StudentFeedbacks';
import StaffList from './pages/Admin-Head/staff-list/StaffList';
import EditStaff from './pages/Admin-Head/staff-list/EditStaff';
import AdminAbout from './pages/AdminAbout';
import ProfileOutlet from './pages/Student-UI/user-profile/ProfileOutlet';
import ReviewStaffListPage from './pages/Admin-Head/staff-review/ReviewStaffListPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path:'register',
        element: <Register/>,
        // action: registerAction
      },
      {
        path:'login',
        element: <Login/>,
        // action: loginAction
      },
      {
        path: 'dashboard-student',
        element: <DashboardStudent />,
        loader: studentLoader,
        children: [
          {
            index: true,
            element: <StudentOutlet />,
           
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'stuffs',
            element: <StuffsOutlet />,
            loader:stuffLoader
          },
          {
            path: 'feedbacks',
            element: <FeedOutlet />,
            // action:feedAction
          },
          {
            path: 'ratings',
            element: <StaffOutlet />,
            loader: StudentStaffRatings,
            action: staffStarRatingAction
          },
          {
            path: 'user-profile',
            element: <ProfileOutlet />,
            loader: userProfileLoader
          },
          {
            path: 'delete-feed/:id',
            action: deleteAction
          }
        ]
      },
      {
        path: "dashboard-admin",
        element: <AdminDashboard />,
        children: [
          {
            index: true,
            element: <AdminDashboardPage />,
            loader: StaffDashboardLoader
          },
        ],
      },
      {
        path: "dashboard-head",
        element: <HeadDashboard />,
        loader: headLoader,
        children: [
          {
            index: true,
            element: <HeadDashboardPage/>,
          },
          {
            path: "personal-review",
            element: <PersonalReviewOutlet />,
            loader: personalfeedLoader
          },
          {
            path: "about",
            element: <AdminAbout />,
           
          },
          {
            path: "add-staffs",
            element: <AddStaffs />,
            action: AddStaffAction,
          },
          {
            path: "staff-reviews",
            element: <ReviewStaffListPage />,
            loader: reviewStaffLoader
          },
          {
            path: "student-feedbacks",
            element: <StudentFeedbacks />,
            loader: H_FeedbackLoader,
          },
          {
            path: "staffs-list",
            element: <StaffList />,
            loader: staffListLoader
          },
          {
            path: "staffs-lists/:id",
            element: <EditStaff />,
            action: editStaffAction,
            loader: editStaffLoader
            
          },
          {
            path: 'delete-staff/:id',
            action: deleteStaffAction
          }
        ],
      },
    ],
  }

]);


const App = () => {
  return (
    <SnackbarProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </SnackbarProvider>
  );
};
export default App;
