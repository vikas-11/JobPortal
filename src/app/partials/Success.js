import React from "react";

import { Button } from "@mui/material";

import { Close } from "@mui/icons-material";
import img1 from "../assets/img/admin/Success.png";

import "../partials/Success.css";

export default function PostAJob() {
  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={img1} alt="No preview" className="centered-image" />
          <div className="text-container">
            <h2>Success</h2>
            <Button
              variant="outlined"
              color="primary"
              className="action-button"
              sx={{
                borderRadius:"50px",
                borderColor:"#6973FE",
                color:"black"
              }}
            >
              Ok
            </Button>
          </div>
        </div>

        <div className="close-icon">
          <Close fontSize="large" />
        </div>
      </div>
    </>
  );
}
