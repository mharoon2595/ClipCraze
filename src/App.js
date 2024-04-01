import AppLayout from "./components/AppLayout";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import VideoPlayback from "./components/VideoPlayback";
import AppOutlet from "./AppOutlet";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppOutlet />,
    children: [
      { path: "/", element: <AppLayout /> },
      { path: "/watch", element: <VideoPlayback /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
