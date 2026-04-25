import BreakingNews from "@/components/BreakingNewsPage";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
