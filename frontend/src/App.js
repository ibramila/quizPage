import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import { ROUTES } from "./routes/route";
import values from "./context/ContextProvider"

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    // <MainContext>
      <RouterProvider router={router} />
    // </MainContext>
  );
}

export default App;