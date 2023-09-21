import { useEffect, useState } from "react";
import "./TopButton.sass";
import { MdKeyboardArrowUp } from "react-icons/md";

const TopButton = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollY >= 500 && (
        <a href="#" className="btn-top">
          <MdKeyboardArrowUp />
        </a>
      )}
    </>
  );
};

export default TopButton;
