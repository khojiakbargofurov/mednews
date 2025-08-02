//rrd
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-mono">
      <header>
        <Navbar />
      </header>
      <main className="py-4">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
