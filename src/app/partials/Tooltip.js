import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import loading from "../pages/users/admin/common/common-icon/Group 47menu .png";
const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});

const longText = `
C, C#, C++, EXPRESS
`;

export default function VariableWidth() {
  return (
    <div>
      <Tooltip title={longText}>
        {/* <Button sx={{ m: 1 }}>Default Width [300px]</Button> */}
        {/* <CustomWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
        </CustomWidthTooltip>
        <NoMaxWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>No wrapping</Button>
    </NoMaxWidthTooltip> */}
        <img
          src={loading}
          alt="loading"
          sx={{
            width: "1",
            height: "10%",
            marginBottom: "1.5vw",
          }}
        />
      </Tooltip>
    </div>
  );
}
