// // import React, { useState } from "react";
// // import {
// //   Drawer,
// //   IconButton,
// //   List,
// //   ListItemButton,
// //   ListItemIcon,
// //   ListItemText,
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";

// // const pages = ["Jobs", "Companies", "Services", "User Profile"];
// // const DrawerComp = () => {
// //   const [openDrawer, setOpenDrawer] = useState(false);

// //   return (
// //     <React.Fragment>
// //       <Drawer
// //         anchor="left"
// //         open={openDrawer}
// //         onClose={() => setOpenDrawer(false)}
// //       >
// //         <List>
// //           {pages.map((page, index) => (
// //             <ListItemButton key={index}>
// //               <ListItemIcon>
// //                 <ListItemText>{page}</ListItemText>
// //               </ListItemIcon>
// //             </ListItemButton>
// //           ))}
// //         </List>
// //       </Drawer>
// //       <IconButton
// //         sx={{ color: "white", marginRight: "auto" }}
// //         onClick={() => setOpenDrawer(!openDrawer)}
// //       >
// //         <MenuIcon color="white" />
// //       </IconButton>
        
        


// //     </React.Fragment>
// //   );
// // };

// // export default DrawerComp;


// import React, { useState } from "react";
// import {
//   Drawer,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import {Link} from "react-router-dom"
// const pages = ["Jobs", "Companies", "Services", "User Profile",];
// const DrawerComp = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);

//   return (
//     <React.Fragment>
//       <Drawer
//         anchor="left"
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//       >
//         <List>
//           {pages.map((page, index) => (
//             <ListItemButton key={index}>
//               <ListItemIcon>
//                 <ListItemText>{page}
//                 <Link to="/jobs">Jobs</Link>
//         <Link to="/companies">companies</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/jobseeker">Profile</Link>
//         </ListItemText>
//               </ListItemIcon>
//             </ListItemButton>
//           ))}
//         </List>
//       </Drawer>
//       <IconButton
//         sx={{  display: { sm: 'block',md:"none" },color: "white", marginRight: "auto" }}
//         onClick={() => setOpenDrawer(!openDrawer)}
       

//       >
//         <MenuIcon color="white" />
//       </IconButton>
        

        
        


//     </React.Fragment>
//   );
// };

// export default DrawerComp;


import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [
  { text: "Smartjob", link: "/" },
  { text: "Jobs", link: "/jobdetails" },
  { text: "Companies", link: "/companyname" },
  { text: "Services", link: "/services" },
  { text: "User Profile", link: "/jobseeker" },
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} component={Link} to={page.link}>
              <ListItemIcon>
                {/* You can remove this if you don't want icons */}
                {/* <IconComponent /> */}
              </ListItemIcon>
              <ListItemText primary={page.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ display: { sm: 'block', md: "none" }, color: "white", marginRight: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

