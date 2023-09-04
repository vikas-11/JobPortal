import React from "react";

import { Button } from "@mui/material";

import { Close } from "@mui/icons-material";
import img1 from "../assets/img/admin/Failed.png";

import "../partials/Failed.css";

export default function PostAJob() {
  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={img1} alt="No preview" className="centered-image" />
          <div className="text-container">
            <h2>Falied</h2>
            <div className="buttons">
            <Button
              variant="outlined"
              color="primary"
              className="action-button"
              sx={{
                borderRadius:"50px",
                borderColor:"#6973FE",
                color:"black",
                marginRight: "50px",
              }}
            >
              Go Back
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className="action-button"
              sx={{
                borderRadius:"50px",
                borderColor:"#6973FE",
                color:"black",

              }}
            >
              Cancel
            </Button>
            </div>
           
          </div>
        </div>

        <div className="close-icon">
          <Close fontSize="large" />
        </div>
      </div>
    </>
  );
}
