import {
  createBrowserRouter,
} from "react-router-dom";
import Index from "../../LandingPage/components/Index";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);``