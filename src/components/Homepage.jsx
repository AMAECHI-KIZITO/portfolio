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
import new_campaigngpt from "../images/new_campaigngpt.png"
import WellWallet from "../images/WellWallet.png"
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
    help: 'Available commands: whoami, programming_languages, programming_languages_frameworks, databases, cybersec_skills, clear, status, contact',
    whoami: 'Backend Engineer | Cybersecurity Engineer',
    cybersec_skills: 'Python, API Security, Kali Linux, Cloud Security, Network Access Control, OSI Layer Security, EDR | XDR',
    programming_languages: 'Python, JavaScript, Node JS',
    programming_languages_frameworks: 'Python Flask, Express JS',
    databases: 'MySQL, MongoDB, PostgreSQL, Mongoose, SQLAlchemy',
    status: 'System Integrity: 100%',
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
            Backend & <span className="text-emerald-500 font-mono">Cybersecurity Engineer</span>
          </p>

          <a className='btn btn-outline-success px-4 mb-4 d-none d-lg-inline-block' href='https://drive.google.com/file/d/1vP5OCrUhr9WmOFB6-6r9-RRBPgY1sPGk/view?usp=sharing'>
            Software Resume
          </a>
          <a className='btn btn-outline-success px-4 mb-4 d-none d-lg-inline-block ms-2' href='https://drive.google.com/file/d/1vP5OCrUhr9WmOFB6-6r9-RRBPgY1sPGk/view?usp=sharing'>
            Cybersecurity Resume
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
          <p id='profession_definition'>Cybersecurity & Software Engineer - Backend</p>
          <a className='btn btn-outline-success' href='https://drive.google.com/file/d/1vP5OCrUhr9WmOFB6-6r9-RRBPgY1sPGk/view?usp=sharing'>Software Resume</a>
          <a className='btn btn-outline-success mt-1' href='https://drive.google.com/file/d/1vP5OCrUhr9WmOFB6-6r9-RRBPgY1sPGk/view?usp=sharing'>Cybersecurity Resume</a>
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

      {/* Skills Section - Modern Design */}
      <div className='container-fluid py-5' id='Skills'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            {/* Section Header */}
            <div className='text-center mb-5'>
              <h2 className='font-weight-bold text-white mb-2'>
                <span className='text-success'>&lt;</span>
                SKILLS
                <span className='text-success'>/&gt;</span>
              </h2>
              <p className='text-muted font-mono'>// Technologies & Frameworks</p>
              <div className='mx-auto' style={{ 
                width: '60px', 
                height: '3px', 
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }}></div>
            </div>

            {/* Skills Grid */}
            <div className='row g-4'>
              {[
                { img: python, name: 'Python', desc: 'Backend Development' },
                { img: js, name: 'JavaScript', desc: 'Full Stack' },
                { img: pythonFlask, name: 'Flask', desc: 'Web Framework' },
                { img: MongoDB, name: 'MongoDB', desc: 'NoSQL Database' },
                { img: MySQLDB, name: 'MySQL', desc: 'SQL Database' },
                { img: Azure, name: 'Azure', desc: 'Cloud Platform' }
              ].map((skill, index) => (
                <div key={index} className='col-6 col-md-4 col-lg-2'>
                  <div 
                    className='text-center p-4 h-100 rounded border border-secondary position-relative overflow-hidden'
                    style={{ 
                      backgroundColor: '#1a1a1e',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#10b981';
                      e.currentTarget.style.backgroundColor = '#242428';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#6c757d';
                      e.currentTarget.style.backgroundColor = '#1a1a1e';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Skill Icon */}
                    <div className='mb-3'>
                      <img 
                        src={skill.img} 
                        alt={skill.name} 
                        className='img-fluid'
                        style={{ 
                          height: '60px',
                          width: 'auto',
                          filter: 'grayscale(30%)'
                        }}
                      />
                    </div>
                    
                    {/* Skill Name */}
                    <h6 className='text-white font-weight-bold mb-1'>{skill.name}</h6>
                    <small className='text-muted font-mono' style={{ fontSize: '11px' }}>
                      {skill.desc}
                    </small>

                    {/* Decorative Corner */}
                    <div 
                      className='position-absolute'
                      style={{
                        top: 0,
                        right: 0,
                        width: '20px',
                        height: '20px',
                        borderTop: '2px solid #10b981',
                        borderRight: '2px solid #10b981',
                        opacity: 0.3
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section - Enhanced Cards */}
      <div className='container-fluid py-5' id='myProjects'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            {/* Section Header */}
            <div className='text-center mb-5'>
              <h2 className='font-weight-bold text-white mb-2'>
                <span className='text-success'>&lt;</span>
                PROJECTS
                <span className='text-success'>/&gt;</span>
              </h2>
              <p className='text-muted font-mono'>Production-grade solutions I've built and maintained</p>
              <div className='mx-auto' style={{ 
                width: '60px', 
                height: '3px', 
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }}></div>
            </div>

            {/* Projects Grid */}
            <div className='row g-4'>
              {[
                {
                  img: datae,
                  title: 'Datae',
                  desc: 'Datae is a Dubai data technology company that allows businesses gain insights into their data without the need of a data analyst in just a few clicks.',
                  link: 'https://app.datae.ae',
                  tags: ['Data Analytics', 'Backend', 'AI']
                },
                {
                  img: new_campaigngpt,
                  title: 'CampaignGPT',
                  desc: 'CampaignGPT enables users interact with their Power BI reports using natural language effortlessly with AI-powered conversational analytics.',
                  link: 'https://campaigngpt.ai',
                  tags: ['AI', 'Power BI', 'NLP']
                },
                {
                  img: WellWallet,
                  title: 'WellWallet',
                  desc: 'WellWallet bridges the gap between pharmacies and patients by helping users get instant discounts on drugs at partner pharmacies near them.',
                  link: 'https://mywellwallet.com',
                  tags: ['Healthcare', 'Mobile', 'API']
                }
              ].map((project, index) => (
                <div key={index} className='col-md-6 col-lg-4'>
                  <div 
                    className='rounded overflow-hidden h-100 d-flex flex-column border border-secondary'
                    style={{ 
                      backgroundColor: '#1a1a1e',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#10b981';
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(16, 185, 129, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#6c757d';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Project Image */}
                    <div 
                      className='position-relative overflow-hidden'
                      style={{ height: '200px', backgroundColor: '#0a0a0a' }}
                    >
                      <img 
                        src={project.img} 
                        alt={project.title}
                        className='w-100 h-100'
                        style={{ 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                      
                      {/* Overlay on hover */}
                      <div 
                        className='position-absolute w-100 h-100 d-flex align-items-center justify-content-center'
                        style={{ 
                          top: 0, 
                          left: 0,
                          backgroundColor: 'rgba(16, 185, 129, 0)',
                          transition: 'background-color 0.3s ease',
                          pointerEvents: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                        }}
                      >
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className='p-4 flex-grow-1 d-flex flex-column'>
                      {/* Title */}
                      <h5 className='text-white font-weight-bold mb-3'>
                        <span className='text-success mr-2'>&gt; </span>
                        {project.title}
                      </h5>

                      {/* Description */}
                      <p className='text-muted small mb-3 flex-grow-1' style={{ lineHeight: '1.6' }}>
                        {project.desc}
                      </p>

                      {/* Tags */}
                      <div className='d-flex flex-wrap gap-2 mb-3'>
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className='badge badge-outline-success px-2 py-1'
                            style={{
                              fontSize: '10px',
                              border: '1px solid #10b981',
                              color: '#10b981',
                              backgroundColor: 'rgba(16, 185, 129, 0.1)',
                              fontFamily: 'monospace',
                              textTransform: 'uppercase'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Explore Button */}
                      <a 
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-outline-success w-100 font-mono'
                        style={{
                          borderWidth: '2px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#10b981';
                          e.currentTarget.style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#10b981';
                        }}
                      >
                        ./explore <span className='ml-2'>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
