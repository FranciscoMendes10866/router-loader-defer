import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import RandomPostPage, { postLoader } from "./pages/RandomPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/post/:postId"
        loader={postLoader}
        element={<RandomPostPage />}
      />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
