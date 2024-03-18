import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Benefits from "@/components/benefits";
import OurClasses from "@/components/ourClasses";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopPage, setIsTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-pink-20">
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
