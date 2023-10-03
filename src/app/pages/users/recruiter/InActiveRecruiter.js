import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MUIDataTable from "mui-datatables";
// import Axios from "../../../utils/Axios";
// import Colors from "../../../utils/colors";

const columns = [
  {
    name: "id",
    label: "User ID",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "time",
    label: "Created At",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const data = [
  {
    name: "Lorem Ipsum",
    id: "169",
    status: "Active",
    time: "2023-07-04 07:00:29",
  },
  {
    name: "Lorem Ipsum LTD",
    id: "156",
    status: "In Review",
    time: "2023-06-01 02:00:03",
  },
  {
    name: "Lorem Ipsum",
    id: "333",
    status: "In Active",
    time: "2023-06-01 02:00:03",
  },
  {
    name: "Lorem Ipsum",
    id: "406",
    status: "In Review",
    time: "2023-06-01 02:00:03",
  },
  {
    name: "Lorem Ipsum LTD",
    id: "916",
    status: "Active",
    time: "2023-07-04 07:00:29",
  },
  {
    name: "Lorem ",
    id: "619",
    status: "In Review",
    time: "2023-06-01 02:00:03",
  },
  {
    name: "Lorem LTD",
    id: "434",
    status: "In Active",
    time: "2023-07-04 07:00:29",
  },
];

const options = {
  filterType: "checkbox",
  responsive: "scrollMaxHeight",
  pagination: false,
};

const styles = {
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    marginLeft: "10px",
    marginTop: "10px",
    borderRadius: "50px",
    marginBottom: "10px",
    backgroundColor: "#6973FE",
    height: "100%",
    position: "relative",
  },
  bottomIcons: {
    position: "absolute",
    bottom: "10px",
    width: "100%",
  },
};

export default function ActiveRecruiter() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const ActiveRecruiter = async () => {
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
  //   ActiveRecruiter();
  // }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-evenly" margin="10px">
          <Typography variant="h6">All Recruiters List </Typography>
          <Typography variant="h6">
            InActive Recruiters
            <ArrowForwardIosIcon
              sx={{ fontSize: "18px", marginLeft: "30px" }}
            />
          </Typography>
        </Box>

        <Box
          sx={{
            margin: "10px",
            width: "90vw",
          }}
        >
          <MUIDataTable data={data} columns={columns} options={options} />
        </Box>
        <Box style={styles.pagination}>
          <Stack>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
