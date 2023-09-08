import React from "react";
import loading from "../../users/admin/common/common-icon/Group 47menu .png";
import colors from "../../../utils/colors";
import profile from "../../users/admin/common/common-icon/Userusericon.png";
import { Box, Button, Typography } from "@mui/material";


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "100%",
    width: "100%",
    borderRadius: "33px",
    border: `1px solid ${colors.palette.background.default}`,
    paddingBlock: "10px",
    paddingInline: "20px",
    margin: "0 auto",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor:colors.palette.background.default,
    width: "13vw",
    height: "5vw",
    borderRadius: "45px",
    color: "white",
    fontSize: {xs:"4.9vw",sm:"2vw",md:"1.5vw"},
  },
  loadingImage: {
    width: "3.5vw",
    height: "0.8vw",
  },
  profileContainer: {
    display: "flex",
    paddingLeft: "2.75vw",
    gap: "2.4vw",
    marginTop: "1.5vw",
    marginBottom: "1vw",
    marginLeft:"0px",
    paddingLeft:"0"
  },
  profileImage: {
    width: "2vw",
    height: "2vw",
    alignItems: "center",
    
  },
  companyName: {
    fontSize: {xs:"2.9vw",sm:"2vw",md:"1.3vw"},
    display: "flex",
    alignItems: "center",
  },
  descriptionContainer: {
    display: "flex",
    gap: "0.9vw",
    justifyContent: "center",
    marginBottom: "1.3vw",
  },
  descriptionTitle: {
    fontSize: {xs:"2.5vw",sm:"2.5vw",md:"1.4vw"},
    fontWeight: "400",
  },
  descriptionText: {
    fontSize: {xs:"2.4vw",sm:"2vw",md:"1vw"},
    paddingTop: "0.5vw",
    fontWeight: "400",
  },
  dateContainer: {
    display: "flex",
    marginInline: "0.3vw",
    gap: "6.4vw",
    marginBottom: "1.5vw",
    
  },
  dateLabel: {
    fontSize: {xs:"1.9vw",sm:"2vw",md:"1.2vw"},
    textAlign: "center",
  },
  dateBox: {
    padding: "10px",
    width: {xs:"15.9vw",sm:"14vw",md:"13vw"},
    height: {xs:"3.2vw",sm:"5vw",md:"4vw"},
    backgroundColor:colors.palette.background.default,
    borderRadius: "45px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  dateText: {
    fontSize: {xs:"1.5vw",sm:"1.4vw",md:"1.2vw"}
  },
  salaryContainer: {
    display: "flex",
    marginInline: "0.3vw",
    gap: "6.8vw",
    marginBottom: "1vw",
  },
  salaryLabel: {
    fontSize: {xs:"2.4vw",sm:"2vw",md:"1.2vw"},
  },
  salaryBox: {
    paddingBlock: "0px",
    width: {xs:"7.9vw",sm:"9vw",md:"5.6vw"},
    height: "2.5vw",
    backgroundColor:colors.palette.background.default,
    borderRadius: "45px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginRight: "3vw",
  },
  salaryText: {
    fontSize: {xs:"1.8vw",sm:"1.8vw",md:"1.3vw"}
  },
  totalAppliedContainer: {
    display: "flex",
    marginInline: "0.3vw",
    gap: "9.3vw",
    marginBottom: "1vw",
  },
  totalAppliedLabel: {
    fontSize: {xs:"2vw",sm:"1.5vw",md:"1vw"}
  },
  totalAppliedBox: {
    borderRadius: "45px",
    backgroundColor:colors.palette.background.default,
    paddingBlock: "0.3vw",
    paddingInline: "2vw",
  },
  totalAppliedText: {
    fontSize: {xs:"2.3vw",sm:"1.8vw",md:"1.2vw"},
    fontWeight: "300",
  },
  postedBox: {
    height: "2.5vw",
    width: {xs:"2vw",sm:"4vw",md:"20vw"},
    borderRadius: "45px",
    textAlign: "center",
    marginTop: "0.2vw",
  },
  postedText: {
    fontSize: {xs:"2.1vw",sm:"1.8vw",md:"1.3vw"},
    fontWeight: "300",
  },
  
};

const PostedJobCard = ({ Postedtitle1, buttonColor, Description,PostedDate,Company, Salary }) => {
  
    Description = `${Description.substring(0,500)}....`;   //POINT TO BE NOTED
  
  const postedBox = {
    height: {xs:"3vw",sm:"2.5vw",md:"2vw"},
    width: {xs:"8.9vw",sm:"7vw",md:"5.3vw"},
    backgroundColor: buttonColor,
    borderRadius: "45px",
    textAlign: "center",
    marginTop: "0.2vw",
  };
  return (
    <div>
      <Box sx={styles.container}>
       
<Box  sx={{ ...styles.buttonContainer, gap: '1.5vw', flexWrap:{xs: 'wrap', md: 'wrap'}  }}>
  <Button
    sx={{
      ...styles.button,
      fontSize: {xs:"2.5vw",sm:"1.5vw",md:"1vw"},
      width: 'calc(25% - 1.5vw)',
      height: '10%',
      marginBottom: '1.5vw',
    }}
  >
    Java
  </Button>
  <Button
    sx={{
      ...styles.button,
      fontSize: {xs:"2.5vw",sm:"1.5vw",md:"1vw"},
      width: 'calc(25% - 1.5vw)',
      height: '10%',
      marginBottom: '1.5vw',
    }}
  >
    Python
  </Button>
  <Button
    sx={{
      ...styles.button,
      fontSize: {xs:"2.5vw",sm:"1.5vw",md:"1vw"},
      width: 'calc(25% - 1.5vw)',
      height: '10%',
      marginBottom: '1.5vw',
    }}
  >
    React
  </Button>
  <Button>
  <img
    src={loading}
    alt="loading"
    sx={{
      ...styles.loadingImage,
      width: '1',
      height: '10%',
      marginBottom: '1.5vw',
    }}
  />
  </Button>
</Box>


        <Box sx={styles.profileContainer}>
          <img
            src={profile}
            alt="profile"
            style={{ width: "3.6vw", height: "3.6vw", alignItems: "center" }}
          />
          <Typography sx={styles.companyName}>{Company}</Typography>
        </Box>

        <Box sx={styles.descriptionContainer}>
          <Typography sx={styles.descriptionTitle}>Description:</Typography>
          <Typography sx={styles.descriptionText}>
            {Description}
          </Typography>
        </Box>

        <Box sx={styles.dateContainer}>
          <Box>
            <Typography sx={styles.dateLabel}>Posted Date</Typography>
            <Box sx={styles.dateBox}>
              <Typography sx={styles.dateText}>
               {PostedDate}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={styles.salaryLabel}>Expected Salary</Typography>
            <Box sx={styles.salaryBox} >
              <Typography sx={styles.salaryText}>{Salary}</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.totalAppliedContainer}>
          <Box>
            <Typography sx={styles.totalAppliedLabel}>
              Total Applied <span sx={styles.totalAppliedBox}>23</span>
            </Typography>
          </Box>
          <Box sx={postedBox}>
            <Typography sx={styles.postedText}>{Postedtitle1}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PostedJobCard;
