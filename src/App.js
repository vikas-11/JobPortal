import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";

// ---------------- TASK 1 ---------------- //

// import Home from "../src/app/pages/users/admin/Home";
import JobDetails from "../src/app/pages/users/candidate/JobDetails";
// import CompanyName from "../src/app/pages/users/admin/CompanyName";
// import JobSeeker from "../src/app/pages/users/candidate/JobSeeker";
// import Footer from "../src/app/partials/Footer";

// ---------------- TASK 2 ---------------- //

// import AdminAllRecruiter from "../src/app/pages/users/admin/AdminAllRecruiter";
// import ActiveRecruiter from "../src/app/pages/users/recruiter/ActiveRecruiter";
// import InActiveRecruiter from "../src/app/pages/users/recruiter/InActiveRecruiter";
// import HomeBannerList from "../src/app/pages/users/admin/HomeBannerList";
// import OfferBannerList from "../src/app/pages/users/admin/OffersBannerList";
// import Dropdown from "../src/app/pages/users/candidate/Dropdown";

// ---------------- TASK 3 ---------------- //

// import LoginAsCompany from "../src/app/pages/users/admin/LoginAsCompany";
// import EditRecruiterDetails from "../src/app/pages/users/recruiter/EditRecruiterDetails";
// import EditCandidateProfile from "../src/app/pages/users/candidate/EditCandidateProfile";
// import PageNotFound from "../src/app/partials/PageNotFound";
// import EducationDetails1 from "../src/app/pages/users/candidate/EducationDetails1";
// import EducationDetails2 from "../src/app/pages/users/candidate/EducationDetails2";
// import RegisterLastPage from "../src/app/pages/users/candidate/RegisterLastPage";

// ---------------- TASK 4 ---------------- //

// import EmployerProfile from "../src/app/pages/users/recruiter/EmployerProfile";
// import JobDetailswithEditOption from "../src/app/pages/users/admin/JobDetailswithEditOption";
// import PostAJob from "../src/app/pages/users/admin/PostAJob";
// import Success from "../src/app/partials/Success";
// import Failed from "../src/app/partials/Failed";
// import PostAJobList from "../src/app/pages/users/admin/PostAjobList";
// import EditProfileCompany from "../src/app/pages/users/admin/EditProfileCompany";
// import JobList from "../src/app/pages/users/admin/JobList";

// ---------------- Vijay Sir Pages ---------------- //
// import AdminLogin from "../src/app/pages/auth/login/adminlogin/Login";
// import UserLogin from "../src/app/pages/auth/login/userlogin/Login";
// import AdminRegister from "../src/app/pages/auth/register/adminregister/Register";
// import UserRegister from "../src/app/pages/auth/register/userregister/Register";

function App() {
  return (
    <>
      <Routes>
        {/*-------------- TASK 1 --------------*/}
        {/* <Route path="/home" element={<Home />}></Route> */}
        {/* <Route path="/jobdetails" element={<JobDetails/>}></Route> */}
        {/* <Route path="/companyname" element={<CompanyName/>}></Route> */}
        {/* <Route path="/jobseeker" element={<JobSeeker/>}></Route> */}
        {/* <Route path="/footer" element={<Footer/>}></Route> */}

        {/*-------------- TASK 2 --------------*/}
        {/* <Route path="/adminallrecruiter" element={<AdminAllRecruiter/>}></Route> */}
        {/* <Route path="/activerecruiter" element={<ActiveRecruiter/>}></Route> */}
        {/* <Route path="/inactiverecruiter" element={<InActiveRecruiter/>}></Route> */}
        {/* <Route path="/homebannerlist" element={<HomeBannerList/>}></Route> */}
        {/* <Route path="/offerbannerlist" element={<OfferBannerList/>}></Route> */}
        {/* <Route path="/dropdown" element={<Dropdown/>}></Route> */}

        {/*-------------- TASK 3 --------------*/}
        {/* <Route path="/loginascomapny" element={<LoginAsCompany/>}></Route> */}
        {/* <Route path="/editrecruiterdetails" element={<EditRecruiterDetails/>}></Route> */}
        {/* <Route path="/editcandidateprofile" element={<EditCandidateProfile/>}></Route> */}
        {/* <Route path="/pagenotfound" element={<PageNotFound/>}></Route> */}
        {/* <Route path="/educationdetails1" element={<EducationDetails1/>}></Route> */}
        {/* <Route path="/educationdetails2" element={<EducationDetails2/>}></Route> */}
        {/* <Route path="/registerlastpage" element={<RegisterLastPage/>}></Route> */}

        {/*-------------- TASK 4 --------------*/}
        {/* <Route path="/employerprofile" element={<EmployerProfile/>}></Route> */}
        {/* <Route path="/jobdetailswitheditoption" element={<JobDetailswithEditOption />}></Route> */}
        {/* <Route path="/joblist" element={<JobList />}></Route> */}
        {/* <Route path="/postajob" element={<PostAJob />}></Route> */}
        {/* <Route path="/postajoblist" element={<PostAJobList />}></Route> */}
        {/* <Route path="/editprofilecompany" element={<EditProfileCompany />}></Route> */}
         {/* <Route path="/success" element={<Success />}></Route> */}
         {/* <Route path="/failed" element={<Failed />}></Route> */}

        {/*-------------- Vijay Sir Pages --------------*/}

         {/* <Route path="/adminlogin" element={<AdminLogin />}></Route> */}
         {/* <Route path="/userlogin" element={<UserLogin />}></Route> */}
         {/* <Route path="/adminregister" element={<AdminRegister />}></Route> */}
         {/* <Route path="/userregister" element={<UserRegister />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
