const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Web Development</div>
              <p>
                As a developer, we have a great responsibility. Hence using my
                experience I will try to fulfill my clients needs.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-chart-line"></i>
              <div className="text">Advertising</div>
              <p>
                A picture speaks a thousand words, but with the help of
                Photoshop, I will be able to make them speak three thousand
                words.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Apps Design</div>
              <p>
                With my design, I can convey the concept of value and quality
                for your product with extra care using Flutter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
