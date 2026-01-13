import { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Lock, ShieldAlert, Cpu, Globe, Code, ChevronRight, Activity } from 'lucide-react';
import '../index.css'
import Navigation from "../includes/nav"
import Footer from "../includes/footer"
import Amaechi from "../images/Amaechi.jpeg";
import tochukwu from "../images/tochukwu.png"
import tochukwu_xavi_stance from "../images/tochukwu_xavi_stance.jpeg";
import tochukwu_bridge from "../images/tochukwu_bridge.jpeg";
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
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', text: 'Initializing secure connection...' },
    { type: 'system', text: 'Authentication successful. Welcome, Operator.' },
    { type: 'info', text: 'Type "help" to see available commands.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalEndRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, clear, status, contact',
    whoami: 'Backend Engineer | Cybersecurity Engineer',
    skills: 'Python, Bash, Kali Linux, AWS Security, Docker, Kubernetes, OWASP Top 10',
    status: 'System Integrity: 100% | Active Firewalls: 4 | Threats Neutralized: 1,402',
    contact: 'Encrypted tunnel established: thisisamaechi@gmail.com',
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputValue.toLowerCase().trim();
      const newOutput = [...terminalOutput, { type: 'user', text: `> ${inputValue}` }];

      if (commands[cmd]) {
        newOutput.push({ type: 'success', text: commands[cmd] });
      } else if (cmd === 'clear') {
        setTerminalOutput([{ type: 'system', text: 'Terminal cleared.' }]);
        setInputValue('');
        return;
      } else {
        newOutput.push({ type: 'error', text: `Command not found: ${cmd}` });
      }

      setTerminalOutput(newOutput);
      setInputValue('');
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutput]);

  return (
    <>
      <Navigation/>

      {/* Welcome Banner */}
      <div className='row focus-area my-5 align-items-start'>
        <div className='col-md-5 text-center'>
          <span>
            <img src={tochukwu_xavi_stance} alt='Tochukwu Amaechi Photograph' className='img-fluid img-thumbnail'/>
          </span>

          <h1 id='introduction' className="my-3  d-none d-lg-block">
            Hi, I'm Tochukwu ⚡️
          </h1>

          {/* <p id='profession_definition' className='text-muted lead mb-3  d-none d-lg-block'>
            Software Engineer — <span className="text-emerald-500 font-mono">Backend</span>
          </p> */}
          <p id='profession_definition' className='text-muted lead mb-3  d-none d-lg-block'>
            Backend Engineer | <span className="text-emerald-500 font-mono">Cybersecurity Engineer</span>
          </p>

          <a className='btn btn-outline-success px-4 mb-4 d-none d-lg-inline-block' href='https://drive.google.com/file/d/1vP5OCrUhr9WmOFB6-6r9-RRBPgY1sPGk/view?usp=sharing'>
            My Resume
          </a>
        </div>

        {/* Introduction & Terminal Column */}
        <div className='col-md-7 big-screens-intro d-none d-lg-block'>
          {/* AUTHENTIC TERMINAL */}
          <div className="position-relative overflow-hidden rounded shadow-2xl border border-secondary" 
              style={{ 
                backgroundColor: '#0c0c0d', 
                height: '400px',
                fontFamily: '"Fira Code", "Courier New", monospace' 
              }}>
            
            {/* CRT Scanline Overlay */}
            <div className="position-absolute w-100 h-100" 
                style={{
                  background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                  opacity: 0.1,
                  pointerEvents: 'none',
                  zIndex: 10
                }}>
            </div>

            {/* Terminal Header */}
            <div className="d-flex align-items-center justify-content-between px-3 py-2" 
                style={{ 
                  backgroundColor: '#1a1a1e', 
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  zIndex: 20
                }}>
              <div className="d-flex" style={{ gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
              </div>
              <div className="text-muted text-uppercase font-weight-bold" 
                  style={{ 
                    fontSize: '11px', 
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                <Terminal size={14} /> 
                <span>Tochukwu Amaechi Kizito— 80X24</span>
              </div>
              <div style={{ width: '36px' }}></div>
            </div>
            
            {/* Terminal Content Area */}
            <div className="p-4 overflow-auto" 
                style={{ 
                  fontSize: '13px', 
                  lineHeight: '1.6',
                  height: 'calc(100% - 42px)',
                  position: 'relative',
                  zIndex: 5
                }}>
              {terminalOutput.map((out, i) => (
                <div key={i} className={`mb-1 ${
                  out.type === 'system' ? 'text-primary' : 
                  out.type === 'success' ? 'text-success' : 
                  out.type === 'error' ? 'text-danger' : 'text-white-50'
                }`}>
                  {out.type !== 'user' && <span className="mr-2" style={{ opacity: 0.5 }}>::</span>}
                  {out.text}
                </div>
              ))}
              
              {/* Input Line */}
              <div className="d-flex align-items-center mt-2">
                <span className="text-success font-weight-bold mr-2">➜</span>
                <span className="text-info mr-2">~</span>
                <input 
                  type="text" 
                  autoFocus
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-fill"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#10b981',
                    caretColor: '#10b981'
                  }}
                />
              </div>
              <div ref={terminalEndRef} />
            </div>
          </div>
        </div>

        {/* Seen on small screens */}
        <div className='col-md-7 small-screens-intro d-lg-none py-4 text-center'>
          <h1 id='introduction'>Hi, I'm Tochukwu ⚡️</h1>
          <p id='profession_definition'>Software Engineer - Backend</p>
          <a className='btn btn-outline-success' href='https://drive.google.com/file/d/1vP5OCrUhr9WmOFB6-6r9-RRBPgY1sPGk/view?usp=sharing'>My Resume</a>
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
