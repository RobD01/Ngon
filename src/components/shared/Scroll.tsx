import { useState, useEffect } from "react";
import Topbar from "./Topbar";

const ScrollHideComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      prevScrollPos = currentScrollPos;

      if (isScrollingDown) {
        setIsVisible(false);
        console.log("down");
      } else {
        setIsVisible(true);
        console.log("up");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isVisible ? "wipe-down-enter" : "wipe-up-exit"}>
      <Topbar />
    </div>
  );
};

export default ScrollHideComponent;
