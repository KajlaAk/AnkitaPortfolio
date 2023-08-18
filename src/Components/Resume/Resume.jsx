import React from 'react'
import Ankita from "../../Components/Resume/AnkitaKajla_Resume.pdf"

const Resume = () => {
  return (
    <div style={{height:"100vh"}}>
     
     <div className='col-md-12' style={{padding:"30px"}}>
      <div className='col-md-8'>
     <h5 className='resumeheading'> <span style={{color:"#284f88",fontSize:"30px"}}>My Skills</span> </h5>
     <h6>HTML</h6>
     <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-success"  style={{width: "95%"}}></div>
</div>
<h6>CSS</h6>
<div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-info" style={{width: "70%"}}></div>
</div>
<h6>Java Script</h6>
<div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning"  style={{width: "75%"}}></div>
</div>
<h6>BootStrap</h6>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-danger"  style={{width: "90%"}}></div>
</div>
<h6>REACT JS </h6>
<div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-light"  style={{width: "80%"}}></div>
</div>
 
  <div className="col-md-4">

  </div>
  <div style={{textAlign:"center",padding:"30px",marginLeft:"30px"}}>
    <a href={Ankita} download
    
    ><h4 className='button'>Download Resume</h4></a>
  
  </div>

</div>
     </div>
   </div>
  )
}

export default Resume
