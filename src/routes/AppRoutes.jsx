import { Route, Routes } from "react-router-dom";
import LayoutDashboard from "../pages/dashboard/layout/LayoutDashboard";
import LayoutDescription from "../pages/shoesDescription/layout/LayoutDescription";
import LayoutHome from "../pages/home/layout/LayoutHome";
import FormLogin from "../pages/loginAndRegister/components/FormLogin";
import FormRegister from "../pages/loginAndRegister/components/FormRegister";
import LayoutShoesMen from "../pages/shoesMen/layout/LayoutShoesMen";
import LayoutShoesWomen from "../pages/shoesWomen/layout/LayoutShoesWomen";
import LayoutCart from "../pages/cart/layout/LayoutCart";
import LayoutPurchases from "../pages/purchasesUser/layout/LayoutPurchases";
import { useState } from "react";

const AppRoutes = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LayoutHome token={token} setToken={setToken} />}
        />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/shoes/women" element={<LayoutShoesWomen />} />
        <Route path="/shoes/men" element={<LayoutShoesMen />} />
        <Route path="/shoes/:id" element={<LayoutDescription />} />
        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            token !== null ? (
              <LayoutDashboard />
            ) : (
              <LayoutHome token={token} setToken={setToken} />
            )
          }
        />
        <Route
          path="/purchase"
          element={
            token !== null ? (
              <LayoutCart />
            ) : (
              <LayoutHome token={token} setToken={setToken} />
            )
          }
        />
        <Route
          path="/user/purchase"
          element={
            token !== null ? (
              <LayoutPurchases />
            ) : (
              <LayoutHome token={token} setToken={setToken} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
