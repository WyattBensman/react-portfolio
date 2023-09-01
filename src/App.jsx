import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  // Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
