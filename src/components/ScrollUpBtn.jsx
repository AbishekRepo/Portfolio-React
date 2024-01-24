import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollUpBtn = () => {
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollUpBtn(true);
      } else {
        setShowScrollUpBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (showScrollUpBtn) {
    return (
      <div className="scroll-up-btn show" onClick={handleScrollTop}>
        <FaAngleUp />
      </div>
    );
  }

  return null; // If showScrollUpBtn is false, render nothing
};

export default ScrollUpBtn;
