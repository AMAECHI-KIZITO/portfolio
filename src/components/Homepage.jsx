import { useState } from 'react'
import Navigation from "../includes/nav"
import Footer from "../includes/footer"
import '../index.css'
import Amaechi from "../images/Amaechi.jpeg";
import tochukwu from "../images/tochukwu.png"
import js from "../images/js.png"
import python from "../images/python.png"
import pythonFlask from "../images/pythonFlask.png"
import MongoDB from "../images/MongoDB.png"
import MySQLDB from "../images/MySQLDB.png"
import Azure from "../images/Azure.png"
import datae from "../images/datae.png"
import campaigngpt from "../images/campaigngpt.png"
import THC from "../images/THC.jpeg"
import chrisllan from "../images/chrisllan.jpeg"

function Home() {
  return (
    <>
      <Navigation/>

      {/* Welcome Banner */}
      <div className='row focus-area my-5 align-items-center'>
        <div className='col-md-5 text-center'>
          <span><img src={tochukwu} alt='Tochukwu Amaechi Photograph' className='img-fluid img-thumbnail'/></span>
        </div>

        <div className='col-md-7 big-screens-intro d-none d-lg-block my-md-3'>
          <h1 id='introduction'>Hi, I'm Tochukwu ⚡️</h1>
          <p id='profession_definition' className='text-right'>Software Engineer - Backend</p>
          <a className='btn btn-outline-success' href='https://drive.google.com/file/d/1xOgEBoSqpOc-3y3V_dnVGvSonJvqpCX1/view?usp=sharing'>My Resume</a>
        </div>

        {/* Seen on small screens */}
        <div className='col-md-7 small-screens-intro d-lg-none py-4 text-center'>
          <h1 id='introduction'>Hi, I'm Tochukwu ⚡️</h1>
          <p id='profession_definition'>Software Engineer - Backend</p>
          <a className='btn btn-outline-success' href='https://drive.google.com/file/d/1xOgEBoSqpOc-3y3V_dnVGvSonJvqpCX1/view?usp=sharing'>My Resume</a>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial-card">
        <div className="profile-icon d-md-none">
          <img src={Amaechi} alt="Profile Icon"/>
        </div>
        <div className="testimonial-content">
          <h3 className="name">TOCHUKWU AMAECHI KIZITO<span className="wave">👋</span></h3>
          <p className="quote">If it can be conceived in the mind, it can be built.</p>
          <p className="experience">"Throughout my career, I've had the opportunity to build impactful solutions for personal businesses, provide strategic consultation to growing startups, and contribute to the agile development process within a data-driven tech startup."</p>
        </div>
      </div>

      {/* Skills For Tablets and Above*/}
      <div className='row skills-bar my-lg-5 mx-lg-5 d-none d-md-flex' id='Skills'>
        <div className='col-12 text-center'>
          <h2 style={{fontWeight:"bolder", fontSize:"35px"}}>SKILLS</h2>
        <span>Tools I'm comfortable with</span>
        </div>
        <div className='col-4 col-md-2 text-center skill-item'>
          <img src={python} alt="Python logo" className='img img-fluid'/>
        </div>
        <div className='col-4 col-md-2 text-center skill-item'>
          <img src={js} alt="Javascript logo" className='img img-fluid'/>
        </div>
        <div className='col-4 col-md-2 text-center skill-item'>
          <img src={pythonFlask} alt="Flask" className='img img-fluid'/>
        </div>
        <div className='col-4 col-md-2 text-center skill-item'>
          <img src={MongoDB} alt="MongoDB" className='img img-fluid'/>
        </div>
        <div className='col-4 col-md-2 text-center skill-item'>
          <img src={MySQLDB} alt="MySQL" className='img img-fluid'/>
        </div>
        <div className='col-4 col-md-2 text-center skill-item'>
          <img src={Azure} alt="Azure" className='img img-fluid'/>
        </div>
      </div>

      {/* Skills For Smaller Screens below Tablets*/}
      <div className="skills-bar d-md-none py-4" id='skills'>
        <h2 className='text-center' style={{fontWeight:"bolder"}}>SKILLS</h2>
        <div className="skills-container">
          <div className="skill-item-small-screens">
            <img src={python} alt="Python logo"/>
          </div>
          <div className="skill-item-small-screens">
            <img src={js} alt="Javascript logo"/>
          </div>
          <div className="skill-item-small-screens">
            <img src={pythonFlask} alt="Flask"/>
          </div>
          <div className="skill-item-small-screens">
            <img src={MongoDB} alt="MongoDB"/>
          </div>
          <div className="skill-item-small-screens">
            <img src={MySQLDB} alt="MySQL"/>
          </div>
          <div className="skill-item-small-screens">
            <img src={Azure} alt="Azure"/>
          </div>
        </div>
      </div>


      {/* Projects Section */}
      <div className='row projects-area mx-lg-5' id='myProjects'>
        <div className='col-12 py-3 text-center'>
          <h2 style={{fontWeight:"bolder"}}>PROJECTS</h2>
          <span>A few selected projects i've been involved in</span>
        </div>

        <div className='col-md-4'>
          <div className="card" style={{width: "100%", backgroundColor:"#242424"}}>
            <img src={datae} className="card-img-top img-thumbnail" alt="Datae image" style={{width: "100%", height:"75%", backgroundColor:"#242424"}}/>
            <div className="card-body">
              <h5 className="card-title">Datae</h5>
              <p className="card-text">Datae is a Dubai data technology company that allows businesses gain insights into their data without the need of a data analyst in just a few clicks.</p>
              <a href="https://app.datae.ae" className="btn btn-outline-success">Explore</a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className="card" style={{width: "100%", backgroundColor:"#242424"}}>
            <img src={campaigngpt} className="card-img-top img-thumbnail" alt="Campaign GPT" style={{width: "100%", height:"75%", backgroundColor:"#242424"}}/>
            <div className="card-body">
              <h5 className="card-title">CampaignGPT</h5>
              <p className="card-text">CampaignGPT is an AI tool that allows business connnect and chat with their powerbi reports using human languages to gain meaningful insights thus breathing life to data.</p>
              <a href="https://app.campaigngpt.ai" className="btn btn-outline-success">Explore</a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className="card" style={{width: "100%", backgroundColor:"#242424"}}>
            <img src={THC} className="card-img-top img-thumbnail" alt="The health cave" style={{width: "100%", height:"75%", backgroundColor:"#242424"}}/>
            <div className="card-body">
              <h5 className="card-title">The Health Cave</h5>
              <p className="card-text">An EMR system that allows onboarded health care facilities effectively manage patients and staff through digitized record management. Gain valuable insights into patients medical history.</p>
              <a href="#" className="btn btn-outline-success">Explore</a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className="card" style={{width: "100%", backgroundColor:"#242424"}}>
            <img src={chrisllan} className="card-img-top img-thumbnail" alt="Chrisllan By Saphy" style={{width: "100%", height:"75%", backgroundColor:"#242424"}}/>
            <div className="card-body">
              <h5 className="card-title">Chrisllan By Saphy</h5>
              <p className="card-text">An online shoe store</p>
              <a href="#" className="btn btn-outline-success">Explore</a>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className='row my-4' id='contactMe'>
        <div className='col-12 text-center'>
          <h2 style={{fontWeight:"bolder"}}>GET IN TOUCH</h2>
          <span>Got a project we could work on together?</span>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/tochukwu-amaechi-kizito/" target="_blank" aria-label="View my linkedin profile">
          <i className="fab fa-brands fa-linkedin"></i>
        </a>
        <a href="https://x.com/this_amaechi" target="_blank" aria-label="View my twitter profile">
          <i className="fab fa-brands fa-x-twitter"></i>
        </a>
        <a href="mailto:thisisamaechi@gmail.com" target="_blank" aria-label="Reach out via mail">
          <i className="fas fa-solid fa-envelope"></i>
        </a>
      </div>

      <Footer/>
    </>
  )
}

export default Home
