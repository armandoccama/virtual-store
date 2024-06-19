import Cart from "./views/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./views/Details/Details";
import NotFound from "./views/NotFound/NotFound";
import Home from "./views/Home/Home";
import OnSale from "./views/OnSale/OnSale";
import { Provider } from "react-redux";
import store from "./store";

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
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}
export default App;
