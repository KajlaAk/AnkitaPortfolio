import React from 'react'

const Project = () => {
  return (
    <div>
     <div className='col-md-12'>
      <h3 className='projects'>PROJECTS</h3>
     </div>
     <div className='col-md-12'style={{display:"flex",padding:"20px"}}>
      <div className='col-md-8'>
      <h4 className='hheading'>Here are some<span style={{color:"#284f88"}}>PROJECTS</span>...</h4>
      <p>Languages used in the projects are HTML CSS JavaScript REACTJS. Making a projects responsive I used Bootstrap.</p>
      <h4 className='hheading'>Projects</h4>
      <h4 className='hheading'><span style={{color:"#284f88"}}>Organic Store</span></h4>
      <ul>
      <li>
         <p>Organic Store is a E-commerce Application built in react.js with extensive use of hooks. </p>
        </li>
        <li>
         <p>In which we can buy lots of things like Groceries, Juices. Also we can Add items in our cart. </p>
        </li>
        <li>
         <p>We can filter the product list and sort the products based price in asc/desc orders and A-Z order.</p>
        </li>
        <li>
         <p><a className='link' href='https://organic-store-byankita.netlify.app/'>Click to open this project</a></p>
        </li>
      </ul>
      <h4 className='hheading'><span style={{color:"#284f88"}}>News APP</span></h4>
      <ul>
      <li>
         <p>It Is a Category Based News App which use News Public API.</p>
        </li><li>
         <p>Used Infinite Scroll to loading purpose</p>
        </li>
        <li>
         <p>Used of Hooks and Props</p>
        </li>
        <li>
        <p><a className='link' href='https://news-app-ankita.netlify.app/'>Click to open this project</a></p>
        </li>
      </ul>
      <h4 className='hheading'><span style={{color:"#284f88"}}>Calculator</span></h4>
      <ul>
      It does Basic Mathematical Operations
     
        <li>
        <p><a className='link' href='https://calculater-math.netlify.app/'>Click to open this project</a></p>
        </li>
      </ul>
      

      </div>
      <div className='col-md-4'>
      
      </div>

    </div>
    </div>
  )
}

export default Project
