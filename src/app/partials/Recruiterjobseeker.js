import { Box, Button, Typography } from "@mui/material";
import React from "react";
import vector2 from "../assets/img/Vector2.png";
import vector1 from "../assets/img/Vector1.png";
import recruiter from "../assets/img/recruiter/recruiter.jpg";
import jobseeker from "../assets/img/users/jobseeker.jpg";
import { Link } from "react-router-dom";
import Colors from "../utils/colors";
const RecruiterJobSeeker = () => {
  return (
    <>
      <Box>
        <img src={vector1} alt="" style={{ height: "100%", width: "100%" }} />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          gap: "5%",
          display: { xs: "block", sm: "flex" },
          margin: "10px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", border: "1px solid #6973FE" },
            padding: "20px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4">
            <strong> I AM A Jobseeker !</strong> <br />
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            {" "}
            Find your dream job and get hired by India's top <br /> companies...
          </Typography>{" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="large"
              sx={{
                marginRight: "20px",
                borderRadius: "20px",
                background: Colors.palette.background.default,
                border: "1px solid black",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: Colors.palette.primary.color,
                  color: Colors.palette.primary.main,
                  border: "1px solid #6973FE",
                },
              }}
            >
              <Link to="/userregister">Register as a Candidate</Link>
            </Button>

            <Typography
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <img
                alt=""
                src={jobseeker}
                style={{ height: "auto", width: "auto" }}
              ></img>
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "48%", border: "1px solid #6973FE" },
            padding: "20px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4">
            <strong> I AM A Recruiter ! </strong> <br />
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            {" "}
            A new advanced approach to hiring employees for
            <br /> your business...
          </Typography>{" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="large"
              sx={{
                marginRight: "20px",
                borderRadius: "20px",
                background: Colors.palette.background.default,
                border: "1px solid black",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: Colors.palette.primary.color,
                  color: Colors.palette.background.default,
                  border: "1px solid #6973FE",
                },
              }}
            >
              <Link to="/recruiterregister">Resigter as a Recruiter</Link>
            </Button>
            <br />
            <Typography
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <img
                alt=""
                src={recruiter}
                style={{ height: "auto", width: "auto" }}
              ></img>
            </Typography>
          </div>
        </Box>
      </Box>
      <Box>
        <img src={vector2} alt="" style={{ height: "100%", width: "100%" }} />
      </Box>
    </>
  );
};

export default RecruiterJobSeeker;
