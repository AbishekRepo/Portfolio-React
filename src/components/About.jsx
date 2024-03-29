import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Resume from "../assets/Abishek-2022 -  Front End Wed dev.pdf";

import Experience from "./Experience";

const About = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["YouTuber", "Developer", "Blogger", "Freelancer"],
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
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="profile-1.png" alt="" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Abishek and I'm a{" "}
              <span className="typing-2" ref={typeTarget}></span>
            </div>
            <p>
              Web Design is fun. It's creative. It gives you a huge
              self-satisfaction when you look at your work and say, "I made
              this!". I love that feeling after I'm done working on something.
              When I lean back in my chair, look at the final result with a
              smile, and have this little "spark joy" moment.
            </p>
            <a href={Resume} download="Abishek-2022 -  Front End Wed dev.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
