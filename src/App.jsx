import React from "react";
import AppRoutes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
