import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const PageWrapper = ({ children }) => {
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <main className="p-3 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
