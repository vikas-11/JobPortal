// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import User from"../common/common-icon/Mask groupuser real.png"
// import Candidate from"../common/common-icon/Mask groupcandidatereal.png"
// import Recruiter from"../common/common-icon/Mask grouprecruiterreal.png"
// import Jobs from '../common/common-icon/Mask groupjobsreal.png'
// import colors from "../../../../utils/colors" 
// import "./card.css"


// const Card = ({ children }) => (
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]); // State to store the fetched data

//   const fetchGetAllActive = async () => {
//     setLoading(true);
//     try {
//       const response = await Axios.get('/getallrecruiter');
//       setData(response.data.data); // Update the state with fetched data
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGetAllActive();
//   }, []);
  


//   <Box
//   width="250px"
//   height="106px"
//   style={{ backgroundColor:colors.palette.background.card }}
//   boxShadow="4px 4px 4px 0px #00000040"
//   p={8}
//   // ml={16}
//   // mt={8}
//   >
//     {children}
//   </Box>
// );

// const FourCards = () => (
  
//   <Grid display="flex" flexDirection="row" container spacing={1} justifyContent={'space-around'} ml={3} mt={2} >
//     <Grid item >
//       <Card className="card" >
//         <img className='image' src={User} alt="user image" />
//         <h4 className='heading'style={{ color:colors.palette.background.text }}>Total Users <br /> 916</h4>
        
//       </Card>
//     </Grid>
//     <Grid item>
//       <Card className="card">
//       <img className='image' src={Candidate} alt="user image" />
//         <h4 className='heading'style={{ color:colors.palette.background.text }}>Total Candidates <br /> 811</h4>
//       </Card>
//     </Grid>
//     <Grid item>
//       <Card className="card">
//       <img className='image' src={Recruiter} alt="user image" />
//         <h4 className='heading'style={{ color:colors.palette.background.text }}>Total Recruiters <br /> 169 </h4>
//       </Card>
//     </Grid>
//     <Grid item>
//       <Card className="card">
//       <img className='image' src={Jobs} alt="user image" />
//         <h4 className='heading'style={{ color:colors.palette.background.text }}>Total Jobs <br /> 1098</h4>
//       </Card>
//     </Grid>
//   </Grid>
// );


// export default FourCards;


import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Axios from 'axios'; // Import Axios for making HTTP requests
import User from "../common/common-icon/Mask groupuser real.png";
import Candidate from "../common/common-icon/Mask groupcandidatereal.png";
import Recruiter from "../common/common-icon/Mask grouprecruiterreal.png";
import Jobs from '../common/common-icon/Mask groupjobsreal.png';
import colors from "../../../../utils/colors";
import "./card.css";

const Card = ({ children }) => (
  <Box
    width="250px"
    height="106px"
    style={{ backgroundColor: colors.palette.background.card }}
    boxShadow="4px 4px 4px 0px #00000040"
    p={8}
    // ml={16}
    // mt={8}
  >
    {children}
  </Box>
);

const FourCards = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllrecruiter = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('/getallrecruiter');
      setData(response.data.data); // Update the state with fetched data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllrecruiter();
  }, []);

  return (
    <Grid display="flex" flexDirection="row" container spacing={1} justifyContent={'space-around'} ml={3} mt={2} >
      <Grid item>
        <Card className="card" >
          <img className='image' src={User} alt="user" />
          <h4 className='heading' style={{ color: colors.palette.background.text }}>Total Users <br /></h4>
        {loading ? <h1>Loading..</h1> :<h1>Loaded</h1>}
        </Card>
      </Grid>
      <Grid item>
        <Card className="card">
          <img className='image' src={Candidate} alt="candidate" />
          <h4 className='heading' style={{ color: colors.palette.background.text }}>Total Candidates <br /> 811</h4>
        </Card>
      </Grid>
      <Grid item>
        <Card className="card">
          <img className='image' src={Recruiter} alt="recruiter" />
          <h4 className='heading' style={{ color: colors.palette.background.text }}>Total Recruiters <br />
           {loading ? <h1>Loading..</h1> :<h1> </h1>}</h4>
        </Card>
      </Grid>
      <Grid item>
        <Card className="card">
          <img className='image' src={Jobs} alt="jobs" />
          <h4 className='heading' style={{ color: colors.palette.background.text }}>Total Jobs <br /> 1098</h4>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FourCards;
