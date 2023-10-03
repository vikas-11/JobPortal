// import React from 'react';
// import FacebookLogin from 'react-facebook-login';

// const FacebookLoginButton = ({ onFacebookLogin }) => {
//   const responseFacebook = (response) => {
//     if (response.status !== 'unknown') {
//       // Successfully logged in, handle the response (e.g., send it to your server).
//       onFacebookLogin(response);
//     } else {
//       // User canceled the login or an error occurred.
//       console.log('Facebook login failed.');
//     }
//   };

//   return (
//     <div>
//       <FacebookLogin
//         appId="YOUR_APP_ID"
//         autoLoad={false}
//         fields="name,email,picture"
//         callback={responseFacebook}
//       />
//     </div>
//   );
// };

// export default FacebookLoginButton;