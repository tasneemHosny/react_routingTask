function Contact() {
    return (  
        <>
        <div style={{ backgroundColor: "white" ,color:"#2C3E50"}} className="py-5 m-auto contact-container">
            <h1 className="mt-5 text-center">CONTACT SECTION</h1>
            <div className="divider d-flex gap-3 justify-content-center align-items-center mt-3">
                <div className="line" style={{backgroundColor:"#2C3E50"}}></div>
                <i className="fas fa-star star"></i>
                <div className="line" style={{backgroundColor:"#2C3E50"}}></div>
            </div>
            <form className="mt-5">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control border-bottom border-1 rounded-3" id="floatingInput" placeholder="User Name"/>
                    <label htmlForfor="floatingInput">User Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control border-bottom border-1 rounded-3" id="floatingInput" placeholder="User Age"/>
                    <label htmlForfor="floatingInput">User Age</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control border-bottom border-1 rounded-3" id="floatingInput" placeholder="User Email"/>
                    <label htmlForfor="floatingInput">User Email</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control border-bottom border-1 rounded-3" id="floatingPassword" placeholder="Password"/>
                    <label htmlForfor="floatingPassword">User Password</label>
                </div>
                <button className="btn mt-3" style={{backgroundColor:"#1ABC9C",color:"white"}}>Send Message</button>
            </form>
        </div>
        </>
    );
}

export default Contact;