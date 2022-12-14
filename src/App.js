import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./store/context";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SharedProductsLayout from "./pages/SharedProductsLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRout from "./pages/ProtectedRout";

function App() {
  const { user, setUser } = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedProductsLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRout user={user}>
                <Dashboard user={user} />
              </ProtectedRout>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
