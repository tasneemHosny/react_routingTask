function Footer() {
    return ( 
        <>
        <footer className="position-absolute w-100 p-0">
            <div className="footer-1 d-flex justify-content-center">
            <div className="row">
                <div className="col-xl-4 col-sm-12 col-md-6">
                    <div className="inner px-5">
                        <div className="footer-item">
                            <h2>LOCATION</h2>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-md-6">
                    <div className="inner px-5">
                        <div className="footer-item">
                            <h2>AROUND THE WEB</h2>
                            <div className="social-icons d-flex justify-content-center align-items-center gap-2 my-3">
                                <div className="rounded-circle border border-1 p-1 social-icon d-flex justify-content-center align-items-center">
                                    <i class="fa-brands fa-facebook"  style={{color: '#ffffff'}}></i>
                                </div>
                                <div className="rounded-circle border border-1 p-1 social-icon d-flex justify-content-center align-items-center">
                                    <i class="fa-brands fa-twitter" style={{color: '#ffffff'}}></i>
                                </div>
                                <div className="rounded-circle border border-1 p-1 social-icon d-flex justify-content-center align-items-center">
                                    <i class="fa-brands fa-linkedin-in" style={{color: '#ffffff'}}></i>
                                </div>
                                <div className="rounded-circle border border-1 p-1 social-icon d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-globe" style={{color: '#ffffff'}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-md-6">
                    <div className="inner px-5">
                        <div className="footer-item">
                            <h2>ABOUT FREELANCER</h2>
                            <p className="text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="footer-2">
                <p className="text-center">Copyright © Your Website 2021</p>
            </div>
        </footer>
        </>
     );
}

export default Footer;