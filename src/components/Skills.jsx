const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p className="mb-4">
              A Master of Computer Science graduate who is seeking to find the
              opportunity to work in a fun and challenging working environment
              that will encourage me to improve and learn new and necessary
              skills as well as be motivated by the company to do my best for
              the sake of helping myself and the company.
            </p>
            {/* Uncomment the button when needed */}
            {/* <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample'>Read More</button> */}
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>70%</span>
              </div>
              <div className="line mysql"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="line mysql"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Next</span>
                <span>70%</span>
              </div>
              <div className="line mysql"></div>
            </div>
            {/* Uncomment this section when needed */}
            {/* <div className="bars">
                  <div className="info">
                      <span>MongoDB</span>
                      <span>70%</span>
                  </div>
                  <div className="line mongodb"></div>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
