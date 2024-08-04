import poert1 from '../../images/poert1.png';
import poert2 from '../../images/port2.png';
import poert3 from '../../images/port3.png';
let images =[poert1,poert2,poert3,poert1,poert2,poert3]
function Portfolio() {
    return ( 
        <>
        <div style={{ backgroundColor: "white" ,color:"#2C3E50"}} className="py-5 container position-relative">
            <h1 className="mt-5 text-center">PORTOFOLIO SECTION</h1>
            <div className="divider d-flex gap-3 justify-content-center align-items-center mt-3">
                <div className="line" style={{backgroundColor:"#2C3E50"}}></div>
                <i className="fas fa-star star"></i>
                <div className="line" style={{backgroundColor:"#2C3E50"}}></div>
            </div>
            <div class="row m-auto g-5">
                {images.map(function(image,index){
                    return(
                        <div class="col-lg-4 col-sm-12 col-md-6" key={index}>
                        <div class="inner position-relative">
                          <img src={image} alt="" class="img-fluid rounded-3"/>
                          <div class="img-layer m-auto d-flex justify-content-center align-items-center position-absolute ">
                            <i class="fa-solid fa-plus fa-8x" style={{color:"white"}}></i>
                          </div>
                        </div>
                        </div>
                    )
                })}
            </div> 
        </div>
        </>
     );
}

export default Portfolio;