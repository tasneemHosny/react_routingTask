function About() {
    return (  
        <>
    <div style={{ backgroundColor: "#1ABC9C" }} className="about-container vh-100 d-flex flex-column justify-content-center align-items-center text-white">
      <h1>About component</h1>
      <div className="divider d-flex gap-3 justify-content-center align-items-center mt-2">
        <div className="line"></div>
        <i className="fas fa-star star"></i>
        <div className="line"></div>
    </div>
      <div className="p-5 d-flex justify-content-center">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-sm-12 col-md-6">
            <div className="inner px-5">
              <div className="footer-item">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 col-md-6">
            <div className="inner px-5">
              <div className="footer-item">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default About;