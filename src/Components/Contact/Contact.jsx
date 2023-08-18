import React, { useState } from 'react'
import {AiFillLinkedin,AiOutlineGithub,AiFillFacebook,AiFillInstagram} from "react-icons/ai"
import { Link } from 'react-router-dom'


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleEmailChange=(event)=>{
    setEmail(event.target.value)
   
  }
  const handleMessageChange=(event)=>{
    setMessage(event.target.value)
  }
  const handleSubmit=(event)=>{
     event.preventDefault();
     console.log('Email:', email);
  console.log('Message:', message);
  setEmail('');
  setMessage('');
   }
  return (
    <div style={{height:"100vh"}}>
      <div className='col-md-12' style={{textAlign:"center"}}>
        <h3 className='contact'>Contact Me </h3>
      </div>
    <div className='col-md-12'style={{padding:"30px"}}>
      <form className='form' onSubmit={handleSubmit}>
      <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
     
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Message</label>
    <div><textarea name="postContent" rows={4} cols={30} value={message} onChange={handleMessageChange} /></div>
  </div>
  <div className="mb-3">
    
    <div><button type="submit" className="btn btn-secondary">Send Mesaage</button>
</div>
<div className='so'>
                <ul>
                    <li className='soci'>
                    <Link to="https://www.linkedin.com/in/ankita-kajla-878a06213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvnmLPt%2BJQeagvvExjgB29A%3D%3D"><AiFillLinkedin size={"30px"}/></Link>
                       <Link to="https://github.com/KajlaAk"><AiOutlineGithub size={"30px"}/></Link>
                       <Link to="https://www.facebook.com/ankita.kajla.16"><AiFillFacebook size={"30px"}/></Link>
                       <Link to="https://www.instagram.com/_ankita__kajla/"><AiFillInstagram size={"30px"}/></Link>
                    </li>
                </ul>
            </div>
  </div>
      </form>
    </div>
    </div>
  )
}

export default Contact
