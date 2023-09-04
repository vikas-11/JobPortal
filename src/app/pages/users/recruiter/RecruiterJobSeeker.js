import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import jobseekerImage from "../../../assets/img/users/jobseeker.jpg";
import recruiterImage from "../../../assets/img/recruiter/recruiter.jpg";
import header from "../../../assets/img/users/Vector1.jpg";
import footer from "../../../assets/img/users/Vector2.jpg";

import "../../../assets/css/RecruiterJobSeeker.css";
import Axios from "../../../utils/axios";
const RecruiterJobSeeker = () => {

    // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchRecruiterJobSeeker = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await Axios.get("/");
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchRecruiterJobSeeker();
  // }, []);

  return (
    <>
      <div className="recruiter">
        <Box component="img" src={header} alt="Profile Photo"/>
        
        <main className="main">
          <Box className="container">
            <Box className="left-side">
              <h2>I Am A Jobseeker!</h2>
              <h5>
                Find your dream job and get hired by India's top companies...
              </h5>
              <div className="image">
                <img src={jobseekerImage} alt="Jobseeker" />
              </div>

              <div className="button">
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: "white",
                    backgroundColor: "#6973FE",
                    "&:hover": {
                      color: "#7797FE",
                      backgroundColor: "white",
                    },
                  }}
                >
                  Browse Jobs
                </Button>
              </div>
            </Box>
            <Box className="right-side">
              <h2>I Am A Recruiter!</h2>
              <h5>
                A new advanced approach to hiring employees for your business...
              </h5>
              <div className="image">
                <img src={recruiterImage} alt="Recruiter" />
              </div>

              <div className="button">
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: "white",
                    backgroundColor: "#6973FE",
                    "&:hover": {
                      color: "#7797FE",
                      backgroundColor: "white",
                    },
                  }}
                >
                  Post Jobs
                </Button>
              </div>
            </Box>
          </Box>
        </main>

        <Box component="img" src={footer} alt="Profile Photo" sx={{}} />
      </div>
    </>
  );
};

export default RecruiterJobSeeker;
