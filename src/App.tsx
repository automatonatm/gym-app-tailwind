import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Selectedpage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<Selectedpage>(
    Selectedpage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(Selectedpage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
