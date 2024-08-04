import React from 'react';
import avataaars from '../../images/avataaars.svg';
function Start_framework() {
  return (  
    <>
      <div style={{ backgroundColor: "#1ABC9C" }} className="vh-100 d-flex flex-column justify-content-center align-items-center text-white">
          <img src={avataaars} alt="Avatar" style={{ width: '250px', height: '250px' , marginBottom:"20px"}} />
          <h1>START FRAMEWORK</h1>
          <div className="divider d-flex gap-3 justify-content-center align-items-center my-2">
            <div className="line"></div>
            <i className="fas fa-star star"></i>
            <div className="line"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

    </>
  );
}

export default Start_framework;

