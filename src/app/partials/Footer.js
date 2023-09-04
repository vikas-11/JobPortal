import React from 'react';

import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Box,
    Grid,
    TextField,
    Container,
    Chip,
  } from "@mui/material";

import { Row, Column, FooterLink, Heading, Headings } from "./FooterStyle";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer(){
    return(
        <>
{/*============ FOOTER ==============*/}
<Box className="footer">
<Container>
  <Row>
    <div className="main-content">
      <Headings>Smart Job</Headings>
      <h4>“Your Career, Our Mission.”</h4>
      <Typography className="sub-content">
        smartjob is a leading employment services industry since 2009,
        offering customers vital services to meet their Global
        Recruitment & Staffing needs with a PAN India presence in Delhi
        NCR (Noida) and Hyderabad.
      </Typography>
    </div>

    <Column>
      <Heading>All Navigations</Heading>
      <FooterLink href="#">Home</FooterLink>
      <FooterLink href="#">Sign In</FooterLink>
      <FooterLink href="#">Browse Jobs</FooterLink>
      <FooterLink href="#">For Jobseeker</FooterLink>
      <FooterLink href="#">For Recruiter</FooterLink>
      <FooterLink href="#">Contact Us</FooterLink>
    </Column>
    <Column>
      <Heading>All Categories</Heading>
      <FooterLink href="#">Healthcare</FooterLink>
      <FooterLink href="#">Software Industry</FooterLink>
      <FooterLink href="#">Accounting And Finance</FooterLink>
      <FooterLink href="#">Education Training</FooterLink>
      <FooterLink href="#">Transportation</FooterLink>
    </Column>
    <Column>
      <Heading>Support</Heading>
      <FooterLink href="#">About Us</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Trust and Safety</FooterLink>
      <FooterLink href="#">Report Issue</FooterLink>
      <FooterLink href="#">Terms and Conditions</FooterLink>
      <FooterLink href="#">Help Centre</FooterLink>
      <FooterLink href="#">Froud Alert</FooterLink>
    </Column>
  </Row>
  <div className="footer-text">
    <p>Employer Name</p>
    <p>Post Job</p>
    <p>Courses</p>
    <p>Register/Login</p>
  </div>

  <div className="social-icons">
    <h4>Our Social Media</h4>
    <TwitterIcon />
    <InstagramIcon />
    <FacebookRoundedIcon />
    <LinkedInIcon />
  </div>
  <div className="bottom-text">
    <h4>Email: Info@Spiralegroup.com Call: 01202555999</h4>
    <h4>
      2022 All Rights With SmartJob & Powered By www.spiralegroup.com
    </h4>
  </div>
</Container>
</Box>
</>
    )
};
