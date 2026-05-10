import { createBrowserRouter } from "react-router";
import LandingPage from "./components/LandingPage";
import UIPlaceholder from "./components/UIPlaceholder";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/ui",
    Component: UIPlaceholder,
  }
]);
