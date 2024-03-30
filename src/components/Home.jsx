import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Blogger", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(typeTarget.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Abishek</div>
          <div className="text-3">
            And Im a <span className="typing" ref={typeTarget}></span>
          </div>
          <a href="#about">Hire me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
