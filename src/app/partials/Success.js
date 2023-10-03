// import React from "react";

// import { Button } from "@mui/material";

// import { Close } from "@mui/icons-material";
// import img1 from "../assets/img/admin/Success.png";

// import "../partials/Success.css";

// export default function PostAJob() {
//   return (
//     <>
//       <div className="container">
//         <div className="image-container">
//           <img src={img1} alt="No preview" className="centered-image" />
//           <div className="text-container">
//             <h2>Success</h2>
//             <Button
//               variant="outlined"
//               color="primary"
//               className="action-button"
//               sx={{
//                 borderRadius:"50px",
//                 borderColor:"#6973FE",
//                 color:"black"
//               }}
//             >
//               Ok
//             </Button>
//           </div>
//         </div>

//         <div className="close-icon">
//           <Close fontSize="large" />
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import img1 from "../assets/img/admin/Success.png";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "auto",
  position: "relative",
};

const imageContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const closeIcon = {
  position: "absolute",
  top: "5%",
  right: "20px",
  cursor: "pointer",
  padding: "5px",
  border: "1px solid #6973FE",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function PostAJob() {
  return (
    <>
      <Box sx={container}>
        <Box sx={imageContainer}>
          <img src={img1} alt="No preview" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h4">Success</Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: "50px",
                borderColor: "#6973FE",
                color: "black",
                marginTop: "10px",
                width:"50%",
                "&:hover": {
                    backgroundColor: "#6973FE",
                    color:"white"
                  },
              }}
            >
              Ok
            </Button>
          </Box>
        </Box>

        <Box sx={closeIcon}>
          <Close fontSize="large" />
        </Box>
      </Box>
    </>
  );
}
