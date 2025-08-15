import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/footer";
import Navigator from "../pages/navigator";

const MainLayout = () => {
  const { pathname } = useLocation(); // Detects route change

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly jumps to the top without animation
  }, [pathname]);
  
  

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Navigator />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

