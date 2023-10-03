import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Axios from "axios"; // Import Axios for making HTTP requests
import User from "../common/common-icon/Mask groupuser real.png";
import Candidate from "../common/common-icon/Mask groupcandidatereal.png";
import Recruiter from "../common/common-icon/Mask grouprecruiterreal.png";
import Jobs from "../common/common-icon/Mask groupjobsreal.png";
import colors from "../../../../utils/colors";
import "./card.css";

const Card = ({ children }) => (
  <Box
    width="250px"
    height="106px"
    style={{ backgroundColor: colors.palette.background.card }}
    boxShadow="4px 4px 4px 0px #00000040"
    p={8}
  >
    {children}
  </Box>
);

const FourCards = () => {
  const [loading, setLoading] = useState(false);
  // const [totalUsers, setTotalUsers] = useState(0);
  // const [totalCandidates, setTotalCandidates] = useState(0);
  const [totalRecruiters, setTotalRecruiters] = useState(0); 
  // const [totalJobs, setTotalJobs] = useState(0);

  // const fetchGetAllrecruiter = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await Axios.get("/getallrecruiter");
  //     const recruiterCount = response.data.data.totalRecruiters; 
  //     setTotalRecruiters(recruiterCount); 
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchGetAllrecruiter();
  // }, []);

  return (
    <Grid
      display="flex"
      flexDirection="row"
      container
      spacing={1}
      justifyContent={"space-around"}
      ml={3}
      mt={2}
    >
      <Grid item>
        <Card className="card">
          <img className="image" src={User} alt="user" />
          <h4
            className="heading"
            style={{ color: colors.palette.background.text }}
          >
            Total Users <br /> 914
          </h4>
        </Card>
      </Grid>

      <Grid item>
        <Card className="card">
          <img className="image" src={Candidate} alt="candidate" />
          <h4
            className="heading"
            style={{ color: colors.palette.background.text }}
          >
            Total Candidates <br /> 864
          </h4>
        </Card>
      </Grid>

      <Grid item>
        <Card className="card" Data={totalRecruiters}>
          <img className="image" src={Recruiter} alt="recruiter" />
          <h4
            className="heading"
            style={{ color: colors.palette.background.text }}
          >
            Total Recruiters
            <br />
            {/* {totalRecruiters} */}
            0
          </h4>
        </Card>
      </Grid>

      <Grid item>
        <Card className="card">
          <img className="image" src={Jobs} alt="jobs" />
          <h4
            className="heading"
            style={{ color: colors.palette.background.text }}
          >
            Total Jobs <br /> 1098
          </h4>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FourCards;
