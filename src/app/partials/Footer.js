// // import React from 'react';

// // import {
// //     AppBar,
// //     Button,
// //     Tab,
// //     Tabs,
// //     Toolbar,
// //     Typography,
// //     useMediaQuery,
// //     useTheme,
// //     Box,
// //     Grid,
// //     TextField,
// //     Container,
// //     Chip,
// //   } from "@mui/material";

// // import { Row, Column, FooterLink, Heading, Headings } from "./FooterStyle";
// // import "./Footer.css";
// // import TwitterIcon from "@mui/icons-material/Twitter";
// // import InstagramIcon from "@mui/icons-material/Instagram";
// // import FacebookRoundedIcon from "@mui/icons-material/Facebook";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";

// // export default function Footer(){
// //     return(
// //         <>
// // {/*============ FOOTER ==============*/}
// // <Box className="footer">
// // <Container>
// //   <Row>
// //     <div className="main-content">
// //       <Headings>Smart Job</Headings>
// //       <h4>“Your Career, Our Mission.”</h4>
// //       <Typography className="sub-content">
// //         smartjob is a leading employment services industry since 2009,
// //         offering customers vital services to meet their Global
// //         Recruitment & Staffing needs with a PAN India presence in Delhi
// //         NCR (Noida) and Hyderabad.
// //       </Typography>
// //     </div>

// //     <Column>
// //       <Heading>All Navigations</Heading>
// //       <FooterLink href="#">Home</FooterLink>
// //       <FooterLink href="#">Sign In</FooterLink>
// //       <FooterLink href="#">Browse Jobs</FooterLink>
// //       <FooterLink href="#">For Jobseeker</FooterLink>
// //       <FooterLink href="#">For Recruiter</FooterLink>
// //       <FooterLink href="#">Contact Us</FooterLink>
// //     </Column>
// //     <Column>
// //       <Heading>All Categories</Heading>
// //       <FooterLink href="#">Healthcare</FooterLink>
// //       <FooterLink href="#">Software Industry</FooterLink>
// //       <FooterLink href="#">Accounting And Finance</FooterLink>
// //       <FooterLink href="#">Education Training</FooterLink>
// //       <FooterLink href="#">Transportation</FooterLink>
// //     </Column>
// //     <Column>
// //       <Heading>Support</Heading>
// //       <FooterLink href="#">About Us</FooterLink>
// //       <FooterLink href="#">Privacy Policy</FooterLink>
// //       <FooterLink href="#">Trust and Safety</FooterLink>
// //       <FooterLink href="#">Report Issue</FooterLink>
// //       <FooterLink href="#">Terms and Conditions</FooterLink>
// //       <FooterLink href="#">Help Centre</FooterLink>
// //       <FooterLink href="#">Froud Alert</FooterLink>
// //     </Column>
// //   </Row>
// //   <div className="footer-text">
// //     <p>Employer Name</p>
// //     <p>Post Job</p>
// //     <p>Courses</p>
// //     <p>Register/Login</p>
// //   </div>

// //   <div className="social-icons">
// //     <h4>Our Social Media</h4>
// //     <TwitterIcon />
// //     <InstagramIcon />
// //     <FacebookRoundedIcon />
// //     <LinkedInIcon />
// //   </div>
// //   <div className="bottom-text">
// //     <h4>Email: Info@Spiralegroup.com Call: 01202555999</h4>
// //     <h4>
// //       2022 All Rights With SmartJob & Powered By www.spiralegroup.com
// //     </h4>
// //   </div>
// // </Container>
// // </Box>
// // </>
// //     )
// // };



// import React from "react";
// import {
//   Grid,
//   Box,
//   Typography,
//   Container,
//   Link,
//   IconButton,
// } from "@mui/material";

// import { Row, Column, FooterLink, Heading, Headings } from "./FooterStyle";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookRoundedIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import footer from "../../app/assets/img/users/Footer.jpg";
// import Colors from "../utils/colors";

// const footerStyle = {
//   backgroundImage: `url(${footer})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// };

// export default function Footer() {
//   return (
//     <>
//       <Box style={footerStyle}>
//         <Container>
//           <Grid container spacing={2}>
//             <Grid
//               container
//               item
//               direction="column"
//               alignItems="center"
//               justifyContent="center"
//               xs={12}
//               sm={6}
//               md={3}
//             >
//               <Box sx={{ justifyContent: "center", textAlign: "center" }}>
//                 <Heading>Smart Job</Heading>
//                 <h4>“Your Career, Our Mission.”</h4>
//                 <Typography>
//                   smartjob is a leading employment services industry since 2009,
//                   offering customers vital services to meet their Global
//                   Recruitment & Staffing needs with a PAN India presence in
//                   Delhi NCR (Noida) and Hyderabad.
//                 </Typography>
//               </Box>
//             </Grid>

//             <Grid
//               container
//               item
//               direction="column"
//               alignItems="center"
//               justifyContent="center"
//               xs={12}
//               sm={6}
//               md={3}
//             >
//               <Heading>All Navigations</Heading>
//               <FooterLink href="/">Home</FooterLink>
//               <FooterLink href="/">Sign In</FooterLink>
//               <FooterLink href="/">Browse Jobs</FooterLink>
//               <FooterLink href="/">For Jobseeker</FooterLink>
//               <FooterLink href="/">For Recruiter</FooterLink>
//               <FooterLink href="/">Contact Us</FooterLink>
//             </Grid>

//             <Grid
//               container
//               item
//               direction="column"
//               alignItems="center"
//               justifyContent="center"
//               xs={12}
//               sm={6}
//               md={3}
//             >
//               <Heading>All Categories</Heading>
//               <FooterLink href="/">Healthcare</FooterLink>
//               <FooterLink href="/">Software Industry</FooterLink>
//               <FooterLink href="/">Accounting And Finance</FooterLink>
//               <FooterLink href="/">Education Training</FooterLink>
//               <FooterLink href="/">Transportation</FooterLink>
//             </Grid>

//             <Grid
//               container
//               item
//               direction="column"
//               alignItems="center"
//               justifyContent="center"
//               xs={12}
//               sm={6}
//               md={3}
//             >
//               <Heading>Support</Heading>
//               <FooterLink href="/">About Us</FooterLink>
//               <FooterLink href="/">Privacy Policy</FooterLink>
//               <FooterLink href="/">Trust and Safety</FooterLink>
//               <FooterLink href="/">Report Issue</FooterLink>
//               <FooterLink href="/">Terms and Conditions</FooterLink>
//               <FooterLink href="/">Help Centre</FooterLink>
//               <FooterLink href="/">Fraud Alert</FooterLink>
//             </Grid>

//             <Grid
//               container
//               item
//               alignItems="center"
//               justifyContent="space-evenly"
//               xs={12}
//             >
//               <FooterLink href="/">Employer Name</FooterLink>
//               <FooterLink href="/">Post Job</FooterLink>
//               <FooterLink href="/">Courses</FooterLink>
//               <FooterLink href="/">Register/Login</FooterLink>
//             </Grid>

//             <Grid
//               container
//               item
//               alignItems="center"
//               justifyContent="start"
//               xs={12}
//             >
//               <Typography>
//                 Email:{" "}
//                 <Link
//                   href="mailto:info@spiralegroup.com"
//                   style={{ color: Colors.palette.background.text}}
//                 >
//                   info@spiralegroup.com
//                 </Link>
//                 <br /> Call:{" "}
//                 <Link href="tel:01202555999" style={{ color:Colors.palette.background.text }}>
//                   01202555999
//                 </Link>
//               </Typography>
//             </Grid>

//             <Grid
//               container
//               item
//               alignItems="center"
//               justifyContent="center"
//               xs={12}
//             >
//               <Typography>
//                 &copy; 2022 All Rights With{" "}
//                 <span style={{ color: Colors.palette.background.text }}>SmartJob</span> & Powered By
//                 <span style={{ color: Colors.palette.background.text}}>
//                   www.spiralegroup.com
//                 </span>{" "}
//                 &nbsp;
//               </Typography>
//               <Typography>Our Social Media</Typography>
//               <IconButton style={{ color:Colors.palette.primary.main }}>
//                 <TwitterIcon />
//               </IconButton>
//               <IconButton style={{ color:Colors.palette.primary.main }}>
//                 <InstagramIcon />
//               </IconButton>
//               <IconButton style={{ color:Colors.palette.primary.main}}>
//                 <FacebookRoundedIcon />
//               </IconButton>
//               <IconButton style={{ color:Colors.palette.primary.main }}>
//                 <LinkedInIcon />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// }

import React from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  Link,
  IconButton,
} from "@mui/material";

import { FooterLink, Heading } from "./FooterStyle";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footer from "../../app/assets/img/users/Footer.jpg";

const footerStyle = {
  // backgroundImage: `url(${footer})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
      background: "linear-gradient(332deg, #2c367f, #c0c0d8)"

  // marginTop:"10px",
};




export default function Footer() {
  return (
    <>
      <Box style={footerStyle}>
        <Container >
          <Grid container spacing={2}>
            <Grid
              container
              item
              direction="column"
              // alignItems="center"
              // justifyContent="center"
              sx={{color: "white"}}
              xs={12}
              sm={6}
              md={3}
            >
              <Box sx={{ marginTop:"20px" }}>
                <Heading>Smart Job</Heading>
                {/* <h4>“Your Career, Our Mission.”</h4> */}
                <Typography sx={{marginLeft:"40px"}}>
                  smartjob is a leading employment services industry since 2009,
                  offering customers vital services to meet their Global
                  Recruitment & Staffing needs with a PAN India presence in
                  Delhi NCR (Noida) and Hyderabad.
                </Typography>
              </Box>
            </Grid>

            <Grid
              container
              item
              direction="column"
              // salignItems="center"
              // justifyContent="center"
              style={{ marginTop: '20px' }}
              xs={12}
              sm={6}
              md={3}
            >
              <Heading>All Navigations</Heading>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/">Sign In</FooterLink>
              <FooterLink href="/">Browse Jobs</FooterLink>
              <FooterLink href="/">For Jobseeker</FooterLink>
              <FooterLink href="/">For Recruiter</FooterLink>
              <FooterLink href="/">Contact Us</FooterLink>
            </Grid>

            <Grid
              container
              item
              direction="column"
              // alignItems="center"
              style={{ marginTop: '20px' }}
              // justifyContent="center"
              xs={12}
              sm={6}
              md={3}
            >
              <Heading>All Categories</Heading>
              <FooterLink href="/">Healthcare</FooterLink>
              <FooterLink href="/">Software Industry</FooterLink>
              <FooterLink href="/">Accounting And Finance</FooterLink>
              <FooterLink href="/">Education Training</FooterLink>
              <FooterLink href="/">Transportation</FooterLink>
            </Grid>

            <Grid
              container
              item
              direction="column"
              // alignItems="center"
              style={{ marginTop: '20px' ,color:"red" }}
              // justifyContent="center"
              xs={12}
              sm={6}
              md={3}
            >
              <Heading>Support</Heading>
              <FooterLink href="/">About Us</FooterLink>
              <FooterLink href="/">Privacy Policy</FooterLink>
              <FooterLink href="/">Trust and Safety</FooterLink>
              <FooterLink href="/">Report Issue</FooterLink>
              <FooterLink href="/">Terms and Conditions</FooterLink>
              <FooterLink href="/">Help Centre</FooterLink>
              <FooterLink href="/">Fraud Alert</FooterLink>
            </Grid>

            <Grid
              container
              item
              alignItems="center"
              justifyContent="space-evenly"
              xs={12}
            >
              <FooterLink href="/">Employer Name</FooterLink>
              <FooterLink href="/">Post Job</FooterLink>
              <FooterLink href="/">Courses</FooterLink>
              <FooterLink href="/">Register/Login</FooterLink>
            </Grid>

            <Grid
              container
              item
              alignItems="center"
              justifyContent="start"
              xs={12}
            >
              <Typography style={{ color: "white" }}>
                Email:{" "}
                <Link
                  href="mailto:info@spiralegroup.com"
                  style={{ color: "white" }}
                >
                  info@spiralegroup.com
                </Link>
                <br /> Call:{" "}
                <Link href="tel:01202555999" style={{ color: "white" }}>
                  01202555999
                </Link>
              </Typography>
            </Grid>

            <Grid
              container
              item
              alignItems="center"
              justifyContent="center"
              xs={12}
            >
              <Typography style={{ color: "white" }}>
                &copy; 2022 All Rights With{" "}
                <span style={{ color: "white" }}>SmartJob</span> & Powered By &nbsp;
                <span style={{ color: "white" }}>
                  www.spiralegroup.com
                </span>{" "}
                &nbsp;
              </Typography>
              <Typography style={{ color: "white" }}>Our Social Media</Typography>
              <IconButton style={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton style={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton style={{ color: "white" }}>
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton style={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}