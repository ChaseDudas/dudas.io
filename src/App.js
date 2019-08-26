import React, { Component } from "react";
// import { Route, NavLink, HashRouter } from "react-router-dom";
// import { Nav, NavDropdown, Navbar, Menu } from 'react-bootstrap'
// import { Dropdown, DropdownButton } from 'react-bootstrap/DropdownButton'
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

import uilabcaptureImage from './assets/UILabCapture.png'


import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn, FaTwitter, FaCoffee, FaRobot, FaArrowRight } from 'react-icons/fa';


import './App.css';
import './components/csshake.css'


config({ ssrFadeout: true });

 
class App extends Component {
  render() {
    return (
      <div id = 'website'>


        <header id = 'headerSection'>
        <Fade bottom>
          <h1 id = 'intro_hello'>
            Hey! 
          </h1>
          <h2 id = 'intro_tag'>
            I am  
            <span id = 'my_name'> Chase Dudas</span>
            , a software engineer dedicated to writing clean and scalable code that makes a difference.
          </h2>
          <h3 id = 'intro_contact'>
            <span>Get in touch </span>
            <span id= 'point_to_contact'></span>
            <span> 
              <a href="mailto:chasedudas13@gmail.com" target="_blank" rel="noopener noreferrer" className = 'hvr-icon-forward highlight_contact'>chasedudas13@gmail.com 
              <FaArrowRight class = 'hvr-icon link_icon'/>
              </a>
            </span>
          </h3>
        </Fade>
        </header>


        <section id = "aboutSection">
        <Fade bottom>
          <div className = 'section_title'>
            About Me 
          </div>
          <div className = 'section_content'>
            <p>
              I am currently getting my B.A. in Computer Science at the 
              <a className = 'underline_link' href = 'https://www.colorado.edu/' target = '_blank' rel="noopener noreferrer"> University of Colorado Boulder</a>
              . I work as a <strong>Software Engineer</strong> at 
              <a className = 'underline_link' href = 'http://www.zdonaldsonlab.com/' target = '_blank' rel="noopener noreferrer"> The Donaldson Lab</a>
            </p>
            <p>
              My goal as a software engineer is to write code that is comfortably readable, easily editable, and highly scalable. 
              Where I can, I enjoy bridging the gap between engineering and design. I like projects that are functional, 
              but also have a fun and visualy appealing aspect to them. 

            </p>
            <p>
              <strong>When I am not working, </strong>
              I am out taking photos, going for a bike ride, or hanging out with my friends. 
              I am also very competitive and love to play sports and game. 
              I mainly play Overwatch and Apex, but when Bordelands 3 comes out its *Game Over*
            </p>
            <a className = 'status' href = 'https://github.com/ChaseD13/Resume/blob/master/resume.pdf' target = '_blank' rel="noopener noreferrer">
              <div className = 'status_message'>
                I am currently seeking full-time oppurtunities!
              </div>
            </a>
          </div>
        </Fade>
        </section>


        <section id = 'workSection'>
        <Fade bottom>
          <div className = 'section_title'>
            Work Environment
          </div>
          <div className = 'section_content'>
          <p> <span> <span className = 'coffee shake-freeze shake-slow'>Coffee</span> - I am a huge coffee consumer, so having great coffee options at work is very important to me. </span> </p>
          <p> <span className = 'light'>Light</span> -  Ideally the work environment would be naturally lit, open, and collaborative. </p>
          <p> <span className = 'events'>Events</span> - Events outside of work are an awesome way to get to know other co workers. </p>
          </div>
        </Fade>
        </section>


        <section id = 'skillsSection'>
        <Fade bottom>
          <div className = 'section_title'>Skills</div>
          <div className = 'section_content'>
            <div id = 'skills_table'>
              <div className = 'skills_category'>
                <div className = 'skills_category_header'>Languages</div>
                <ul>
                  <li className = 'skills_category_item'>C++</li>
                  <li className = 'skills_category_item'>Python</li>
                  <li className = 'skills_category_item'>TypeScript</li>
                  <li className = 'skills_category_item'>HTML/CSS</li>
                  <li className = 'skills_category_item'>Scala</li>
                  <li className = 'skills_category_item'>JavaScript</li>
                  <li className = 'skills_category_item'>SQL</li>
                </ul>
              </div>
              <div className = 'skills_category'>
                <div className = 'skills_category_header'>Frameworks</div>
                <ul>
                  <li className = 'skills_category_item'>React</li>
                  <li className = 'skills_category_item'>Node.js</li>
                </ul>
              </div>
              <div className = 'skills_category'>
                <div className = 'skills_category_header'>Tools</div>
                <ul>
                  <li className = 'skills_category_item'>Git/GitHub</li>
                  <li className = 'skills_category_item'>Bash</li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
        </section>


        <section id = 'experienceSection'>
        <Fade bottom>
          <div className = 'section_title'>Experience</div>
          <div className = 'section_content'>
            <div id = 'job_list'>
              <div className = 'job'>
                <div className = 'company_time'>
                  <div className = 'company'>
                    <a href = 'http://www.zdonaldsonlab.com/' tagret = '_blank' rel="noopener noreferrer">The Donaldson Lab</a>
                  </div>
                  <div className = 'time'>May 2019 - Present</div>
                </div>
                <div className = 'job_title'>Software Engineer</div>
              </div>
              <div className = 'job'>
                <div className = 'company_time'>
                  <div className = 'company'>
                    <a href = 'https://www.ventura.org/general-services-agency/' tagret = '_blank' rel="noopener noreferrer">GSA</a>
                  </div>
                  <div className = 'time'>May 2018 - August 2018</div>
                </div>
                <div className = 'job_title'>IT</div>
              </div>
            </div>
              <a href = 'https://github.com/ChaseD13/Resume/blob/master/resume.pdf' 
               target = '_blank' className = 'hvr-icon-forward' id = 'resume_link' rel="noopener noreferrer">View My Resume
              <FaArrowRight class = 'hvr-icon link_icon'/>
              </a>
          </div>
        </Fade>
        </section>


        <section id = 'projectsSection'>
        <Fade bottom>
          <div className = 'section_title'>Projects</div>
          <div className = 'section_content'>
            <div className = 'highlighted_project'>
              <figure className = 'highlighted_project_pic'>
                <a href = 'https://github.com/donaldsonlab/UI-lab-capture' target = '_blank' rel="noopener noreferrer">
                  <img src = {uilabcaptureImage} alt="loading..."></img>
                </a>
              </figure>
              <figcaption className = 'highlighted_project_caption'>
                <div className = 'highlighted_project_name'>
                  <a href = 'https://github.com/donaldsonlab/UI-lab-capture' target = '_blank' rel="noopener noreferrer">UI Lab Capture</a>
                </div>
                <p>
                  An interface designed to make a scientist's job easier by providing a 
                  simple, yet effective way of setting up their cameras and starting their data collection. 
                </p>
              </figcaption>
            </div>
          </div>
        </Fade>
        </section>


        <section id = 'otherProjectsSection'>
        <Fade bottom>
          <div className = 'section_title'>Other Projects</div>
          <div className = 'section_content'>
            <div className = 'project'>
              <div className = 'project_name'>
                <a href = 'https://github.com/ChaseD13/ToDo-List' target = '_blank' rel="noopener noreferrer" className = 'arrow_link'>ToDo List</a>
              </div>
              <p>
                A simple To Do List web app with React and Mobx.
              </p>
              <div className = 'project_tags'>
                <span className = 'project_tag'>TypeScript</span>
                <span className = 'project_tag'>HTML</span>
                <span className = 'project_tag'>CSS</span>
                <span className = 'project_tag'>JavaScript</span>
              </div>
            </div>
            <div className = 'project'>
              <div className = 'project_name'>
                <a href = 'https://github.com/ChaseD13/PiZeroW-Rubber-Ducky' target = '_blank' rel="noopener noreferrer"
                   className = 'arrow_link'>Pi Zero W Rubber Ducky</a>
              </div>
              <p>
                A self driven project to make a modified version of a rubber ducky using a Raspberry Pi Zero W
              </p>
              <div className = 'project_tags'>
                <span className = 'project_tag'>HTML</span>
              </div>
            </div>
            <div className = 'project'>
              <div className = 'project_name'>
                <a href = 'https://github.com/ChaseD13/EELE' target = '_blank' rel="noopener noreferrer" className = 'arrow_link'>E.E.L.E.</a>
              </div>
              <p>
                <b>Excel. External. Link. Editor.</b> (E.E.L.E.) recurses through a folder given by the user. 
                It checks for external links that are deemed bad by the if else statements. 
                It also toggles on/off Read Only to make changes.
              </p>
              <div className = 'project_tags'>
                <span className = 'project_tag'>PowerShell</span>
              </div>
            </div>
            <div className = 'project'>
              <div className = 'project_name'>
                <a href = 'https://github.com/Yahoooligans/ScrumMasterLove.com' target = '_blank' rel="noopener noreferrer"
                   className = 'arrow_link'>ScrumMasterLove.com</a>
              </div>
              <p>
                A dating app designed to connect scrum masters to one another. 
                This team project was created using agile methodologies. 
                Hosted by Heroku. 
              </p>
              <div className = 'project_tags'>
                <span className = 'project_tag'>JavaScript</span>
                <span className = 'project_tag'>HTML</span>
                <span className = 'project_tag'>CSS</span>
              </div>
            </div>
            <div className = 'project'>
              <div className = 'project_name'>
                <a href = 'https://github.com/ChaseD13/TwilioMessenger-Desktop' target = '_blank' rel="noopener noreferrer" 
                   className = 'arrow_link'>Twilio Desktop Messenger</a>
              </div>
              <p>
                A project to check if a user is still logged in at work after 5pm. 
                If they are, the app sends a randomly selected message to a person of their choosing that they are going to be late.  
              </p>
              <div className = 'project_tags'>
                <span className = 'project_tag'>PowerShell</span>
              </div>
            </div>

          </div>
        </Fade>
        </section>


        <footer className = 'footer'>
          <div id = 'footer_cc'>
            <div id = 'footer_cc_top'>
              <span>Coded by:</span>
            </div>
            <div id = 'footer_cc_bot'>
              <span>Chase Dudas</span>
            </div>
          </div>
          <div id = 'footer_links'>
          <IconContext.Provider value={{ color: "black", className: "footer_image", size: "1.5em"}}>
            <a href = 'https://www.buymeacoffee.com/E9UCSZ4iL' target = '_blank' rel="noopener noreferrer"
               title = 'buymeacoffee' className = 'footer_links_img'>
              <span className = 'text'>buymeacoffee</span>
              <FaCoffee/>
            </a>
            <a href = 'https://github.com/ChaseD13' target = '_blank' rel="noopener noreferrer" 
               title = 'github' className = 'footer_links_img'>
              <span className = 'text'>github</span>
              <FaGithub/>
            </a>
            <a href = 'https://www.linkedin.com/in/chasedudas/' target = '_blank' rel="noopener noreferrer"
               title = 'linkedin' className = 'footer_links_img'>
              <span className = 'text'>linkedin</span>
              <FaLinkedinIn/>
            </a>
            <a href = 'https://www.redbubble.com/people/Iro13' target = '_blank' rel="noopener noreferrer"
               title = 'redbubble' className = 'footer_links_img'>
              <span className = 'text'>redbubble</span>
              <FaRobot/>
            </a>
            <a href = 'https://twitter.com/ChaseDudas' target = '_blank' rel="noopener noreferrer"
               title = 'twitter' className = 'footer_links_img'>
              <span className = 'text'>twitter</span>
              <FaTwitter/>
            </a>
          </IconContext.Provider>
          </div>
        </footer>


      </div>
    );
  }
}
 
export default App;