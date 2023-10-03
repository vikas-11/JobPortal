import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";
import Navbar from "../partials/Navbar";


import Home from "../pages/users/candidate/Home";
import RecruiterJobSeeker from "../partials/Recruiterjobseeker";
import JobDetails from "../pages/users/candidate/JobDetails";
import CompanyName from "../pages/users/candidate/CompanyName";
import PrivateRoute from "../partials/Privateroute";
import JobSeeker from "../pages/users/candidate/JobSeeker";
import EditCandidateProfile from "../pages/users/candidate/EditCandidateProfile";
import EducationDetails1 from "../pages/users/candidate/EducationDetails1";
import EducationDetails2 from "../pages/users/candidate/EducationDetails2";
import RegisterLastPage from "../pages/users/candidate/RegisterLastPage";


import LoginAsCompany from "../pages/users/recruiter/LoginAsCompany";
import EditRecruiterDetails from "../pages/users/recruiter/EditRecruiterDetails";
import PostAJob from "../pages/users/recruiter/PostAJob";
import ActiveRecruiter from "../pages/users/recruiter/ActiveRecruiter";  
import InActiveRecruiter from "../pages/users/recruiter/InActiveRecruiter";
import EmployerProfile from "../pages/users/recruiter/EmployerProfile";
import JobDetailswithEditOption from "../pages/users/recruiter/JobDetailswithEditOption";


import Dashboard from "../pages/users/admin/Dashboard";
import Active1 from "../pages/users/admin/Active";
import Inactive1 from "../pages/users/admin/Inactive";
import Candidate from "../pages/users/admin/Candidate";
import ActiveCandidate from "../pages/users/admin/ActiveCandidate";
import InactiveCandidate from "../pages/users/admin/InactiveCandidate";
import PostedJob from "../pages/users/admin/PostedJob";
import PendingPostedJob from "../pages/users/admin/Pendingpostedjob";
import ActivePostedJob from "../pages/users/admin/Activepostedjob";
import InactivePostedJob from "../pages/users/admin/Inactivepostedjob";
import Subdomain from "../pages/users/admin/Subdomain";
import Domain from "../pages/users/admin/Domain";
import Homebanner from "../pages/users/admin/Homebanner";
import Offerbanner from "../pages/users/admin/Offerbanner";
import EditRecruiter from "../pages/users/admin/EditRecruiter";
import EditProfileCompany from "../pages/users/admin/EditProfileCompany";


import Success from "../partials/Success";
import Failed from "../partials/Failed";
import Pop from "../pages/users/admin/Pop";
import PageNotFound from "../partials/PageNotFound";


import AdminLogin from "../pages/users/auth/login/adminlogin/AdminLogin";
import UserLogin from "../pages/users/auth/login/userlogin/UserLogin";
import Recruiterregister from "../pages/users/auth/register/recruiterregister/Recruiterregister";
import UserRegister from "../pages/users/auth/register/userregister/UserRegister";


function AppRouter() {
  const [isLoggedIn, setIsLoggedIn]= useState(false); 
  
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>

    {/* =====CANDIDATE ROUTES===== */}
     {/* First commit */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/recruiterjobseeker"  element={<RecruiterJobSeeker/>}> </Route>
      <Route path="/jobdetails" element={<JobDetails  setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/companyname" element={<CompanyName setIsLoggedIn={setIsLoggedIn}/>}></Route>
    
      <Route path="/jobseeker" element={ <PrivateRoute isLoggedIn={isLoggedIn}> <JobSeeker/> </PrivateRoute>}> </Route>

      <Route path="/editcandidateprofile" element={<EditCandidateProfile setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/educationdetails1" element={<EducationDetails1 setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/educationdetails2" element={<EducationDetails2 setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/registerlastpage" element={<RegisterLastPage setIsLoggedIn={setIsLoggedIn}/>}></Route>


      {/* =====RECRUITER ROUTES===== */}
      <Route path="/loginascomapny" element={<LoginAsCompany setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/editrecruiterdetails" element={<EditRecruiterDetails setIsLoggedIn={setIsLoggedIn}/>}></Route>   {/*  not done */}
      <Route path="/postajob" element={<PostAJob setIsLoggedIn={setIsLoggedIn} />}></Route>
      <Route path="/ActiveRecruiter" element={<ActiveRecruiter />}></Route>      {/*  not done */}
      <Route path="/InActiveRecruiter" element={<InActiveRecruiter />}></Route>   {/*  not done */}
      <Route path="/EmployerProfile" element={<EmployerProfile />}></Route>
      <Route path="/JobDetailswithEditOption" element={<JobDetailswithEditOption />}></Route>


      {/* ======= ADMIN ROUTES ========= */}
      <Route path="/dashboard" element={<Dashboard />}></Route> 
      <Route path="/active" element={<Active1 />}></Route> 
      <Route path="/inactive" element={<Inactive1 />}></Route>
      <Route path="/candidate" element={<Candidate />}></Route>
      <Route path="/activecandidate" element={<ActiveCandidate />}></Route>{" "}
      <Route path="/inactivecandidate" element={<InactiveCandidate />} ></Route>{" "}
      <Route path="/postedjob" element={<PostedJob Postedtitle={"Posted"} buttonColor={"#CCFFCC"} />} ></Route>{" "}
      <Route path="/pendingjob" element={ <PendingPostedJob Postedtitle={"Pending"} buttonColor={"#FFC804"} /> } ></Route>
      <Route path="/activejob" element={ <ActivePostedJob Postedtitle={"Active"} buttonColor={"#CCFFCC"} /> } ></Route>{" "}
      <Route path="/inactivejob" element={<InactivePostedJob Postedtitle={"Inactive"}  buttonColor={"#FF0000C9"} /> } ></Route>{" "}
      <Route path="/subdomain" element={<Subdomain />}></Route>
      <Route path="/domain" element={<Domain />}></Route>
      <Route path="/homebanner" element={<Homebanner />}></Route>
      <Route path="/offerbanner" element={<Offerbanner />}></Route>
      <Route path="/editrecruiter" element={<EditRecruiter />}></Route>
      <Route path="/editprofilecompany" element={<EditProfileCompany />} ></Route>


      {/* ====MISCALLANEOUS ROUTES===== */}
      <Route path="/success" element={<Success />}></Route>
      <Route path="/failed" element={<Failed />}></Route>
      <Route path='/pop' element={<Pop/>}></Route> 
      <Route path ='/*'  element={<PageNotFound/>}></Route>


      {/*-------------- Authentication Pages --------------*/}
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/userlogin" element={<UserLogin  setIsLoggedIn={setIsLoggedIn} />}></Route>
      <Route path="/recruiterregister" element={<Recruiterregister />}></Route>
      <Route path="/userregister" element={<UserRegister />}></Route>
    </Routes>
    </div>
  );
}

export default AppRouter;
