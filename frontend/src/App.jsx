import "./css/App.css";
import AppProvider from "./context/AppProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SearchResults from "./pages/SearchResults/SearchResults";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Category from "./pages/Category/Category";
import UserProfile from "./pages/UserProfile/UserProfile";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* Weitere Routen hier zwischen */}
          <Route path="search" element={<SearchResults />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
          <Route path="user" element={<UserProfile />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="product" element={<ProductDetails />} />
          {/* Weitere Routen hier zwischen */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

export default App;
