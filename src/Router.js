// import { createBrowserRouter } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Landing from "./Landing";

// const Router = createBrowserRouter([
//     {
//       element: <Landing />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/login",
//           element: <Login />,
//         },
  
        
//       ],
//     },
//   ]);
  
//   export default Router;
  

import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Landing from "./Landing";

const Router = createBrowserRouter([
    {
      element: <Landing/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
]);

export default Router;