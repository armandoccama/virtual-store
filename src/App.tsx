import Cart from "./views/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./views/Details/Details";
import NotFound from "./views/NotFound/NotFound";
import Home from "./views/Home/Home";
import OnSale from "./views/OnSale/OnSale";

// import Details from "./views/Details/Details";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/onsale", element: <OnSale /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}
export default App;
