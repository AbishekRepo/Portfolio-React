import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Teams = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <Slider className="carousel owl-carousel" {...settings}>
          <div className="card">
            <div className="box">
              <a
                href="https://www.datasite.com/us/en.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="layer1.png" alt="Datasite" />
              </a>
              <div className="text">Datasite</div>
              <p>Datasite Diligence virtual data room platform</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://gitbuh-searchprofile.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="layer2.png" alt="Github" />
              </a>
              <div className="text">Github-Search</div>
              <p>Github API to find latest repositories of our friends</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://stayfitgymabi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Layer3.png" alt="Stay-Fit" />
              </a>
              <div className="text">Stay-fit</div>
              <p>Explore all kind of Excercises to keep you fit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://mybudgetappabi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Layer4.png" alt="Budget App" />
              </a>
              <div className="text">Budget Calc</div>
              <p>Budget Calculator with local storage. Calc Budget</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://joke-buddy.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Layer5.png" alt="Joke-Buddy" />
              </a>
              <div className="text">Joke-Buddy</div>
              <p>Instant joke teller uing voice note. Click & laugh</p>
            </div>
          </div>
        </Slider>
        <a
          href="https://my-project-site-refer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="project-text">Click Here to Explore all My projects</p>
        </a>
      </div>
    </section>
  );
};

export default Teams;
