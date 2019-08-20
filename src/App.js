import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, NavDropdown, Navbar, Menu } from 'react-bootstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap/DropdownButton'
import uilabcaptureImage from './assets/UILabCapture.png'

import './App.css';

import Home from "./components/HomePage";

 
class App extends Component {
  render() {
    return (
      <div id = 'website'>


        <header id = 'headerSection'>
          <h1 id = 'intro_hello'>
            Hello! 
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
              <a href="mailto:chasedudas13@gmail.com" target="_blank" id = "highlight_contact">chasedudas13@gmail.com</a>
            </span>
          </h3>
        </header>


        <section id = "aboutSection" data-sr-id = "1">
          <div class = 'section_title'>
            About Me 
          </div>
          <div class = 'section_content'>
            <p>
              I am currently getting my B.A. in Computer Science at the 
              <a class = 'underline_link' href = 'https://www.colorado.edu/' target = '_blank'> University of Colorado Boulder</a>
              . I work as a <strong>Software Engineer</strong> at 
              <a class = 'underline_link' href = 'http://www.zdonaldsonlab.com/' target = '_blank'> The Donaldson Lab</a>
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
            <a class = 'status' href = 'https://github.com/ChaseD13/Resume/blob/master/ResumePDF%20-%204:15:19.pdf' target = '_blank'>
              <div id = 'status_light'>
                <div id = 'status_light_ring'>
                </div>
                <div id = 'status_light_led'>
                </div>
              </div>
              <div class = 'status_message'>
                Currently seeking full-time oppurtunities!
              </div>
            </a>
          </div>
        </section>


        <section id = 'workSection'>
          <div class = 'section_title'>
            Work Environment:
          </div>
          <div class = 'section_content'>
          <p> <strong>Coffee!</strong> - I am a huge coffee consumer, so having great coffee options at work is very important to me. </p>
          <p> Light -  Ideally the work environment would be naturally lit, open, and collaborative. </p>
          <p> Events - Outside of work events are an awesome way to get to know other co workers. </p>
          </div>
        </section>


        <section id = 'skillsSection' data-sr-id = '2'>
          <div class = 'section_title'>Skills</div>
          <div class = 'section_content'>
            <div id = 'skills_table'>
              <div class = 'skills_category'>
                <div class = 'skills_category_header'>Languages</div>
                <ul>
                  <li class = 'skills_category_item'>C++</li>
                  <li class = 'skills_category_item'>Python</li>
                  <li class = 'skills_category_item'>TypeScript</li>
                  <li class = 'skills_category_item'>HTML/CSS</li>
                  <li class = 'skills_category_item'>Scala</li>
                  <li class = 'skills_category_item'>JavaScript</li>
                  <li class = 'skills_category_item'>SQL</li>
                </ul>
              </div>
              <div class = 'skills_category'>
                <div class = 'skills_category_header'>Frameworks</div>
                <ul>
                  <li class = 'skills_category_item'>React</li>
                  <li class = 'skills_category_item'>Node.js</li>
                </ul>
              </div>
              <div class = 'skills_category'>
                <div class = 'skills_category_header'>Tools</div>
                <ul>
                  <li class = 'skills_category_item'>Git/GitHub</li>
                  <li class = 'skills_category_item'>Bash</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section id = 'experienceSection' data-sr-id = '3'>
          <div class = 'section_title'>Experience</div>
          <div class = 'section_content'>
            <div id = 'job_list'>
              <div class = 'job'>
                <div class = 'company_time'>
                  <div class = 'company'>
                    <a href = 'http://www.zdonaldsonlab.com/' tagret = '_blank' >The Donaldson Lab</a>
                  </div>
                  <div class = 'time'>May 2019 - Present</div>
                </div>
                <div class = 'job_title'>Software Engineer</div>
              </div>
              <div class = 'job'>
                <div class = 'company_time'>
                  <div class = 'company'>
                    <a href = 'https://www.ventura.org/general-services-agency/' tagret = '_blank' >GSA</a>
                  </div>
                  <div class = 'time'>May 2018 - August 2018</div>
                </div>
                <div class = 'job_title'>IT</div>
              </div>
            </div>
            <a href = 'https://github.com/ChaseD13/Resume/blob/master/ResumePDF%20-%204:15:19.pdf' target = '_blank' id = 'resume_link'>View My Resume -></a>
          </div>
        </section>


        <section id = 'projectsSection' data-sr-id = '4'>
          <div class = 'section_title'>Projects</div>
          <div class = 'section_content'>
            <div class = 'highlighted_project'>
              <figure class = 'highlighted_project_pic'>
                <a href = 'https://github.com/donaldsonlab/UI-lab-capture' target = '_blank'>
                  <img src = {uilabcaptureImage} alt="loading..."></img>
                </a>
              </figure>
              <figcaption class = 'highlighted_project_caption'>
                <div class = 'highlighted_project_name'>
                  <a href = 'https://github.com/donaldsonlab/UI-lab-capture' target = '_blank'>UI Lab Capture</a>
                </div>
                <p>
                  An interface designed to make a scientist's job easier by providing a 
                  simple, yet effective way of setting up their cameras and starting their data collection. 
                </p>
              </figcaption>
            </div>
          </div>
        </section>


        <section id = 'otherProjectsSection' data-sr-id ='5'>
          <div class = 'section_title'>Other Projects</div>
          <div class = 'section_content'>
            <div class = 'project'>
              <div class = 'project_name'>
                <a href = 'https://github.com/ChaseD13/ToDo-List' target = '_blank' class = 'arrow_link'>ToDo List</a>
              </div>
              <p>
                A simple To Do List web app with React and Mobx.
              </p>
              <div class = 'project_tags'>
                <span class = 'project_tag'>TypeScript</span>
                <span class = 'project_tag'>HTML</span>
                <span class = 'project_tag'>CSS</span>
                <span class = 'project_tag'>JavaScript</span>
              </div>
            </div>
            <div class = 'project'>
              <div class = 'project_name'>
                <a href = 'https://github.com/ChaseD13/PiZeroW-Rubber-Ducky' target = '_blank' class = 'arrow_link'>Pi Zero W Rubber Ducky</a>
              </div>
              <p>
                A self driven project to make a modified version of a rubber ducky using a Raspberry Pi Zero W
              </p>
              <div class = 'project_tags'>
                <span class = 'project_tag'>HTML</span>
              </div>
            </div>
            <div class = 'project'>
              <div class = 'project_name'>
                <a href = 'https://github.com/ChaseD13/EELE' target = '_blank' class = 'arrow_link'>E.E.L.E.</a>
              </div>
              <p>
                <b>Excel. External. Link. Editor.</b> (E.E.L.E.) recurses through a folder given by the user. 
                It checks for external links that are deemed bad by the if else statements. 
                It also toggles on/off Read Only to make changes.
              </p>
              <div class = 'project_tags'>
                <span class = 'project_tag'>PowerShell</span>
              </div>
            </div>
            <div class = 'project'>
              <div class = 'project_name'>
                <a href = 'https://github.com/Yahoooligans/ScrumMasterLove.com' target = '_blank' class = 'arrow_link'>ScrumMasterLove.com</a>
              </div>
              <p>
                A dating app designed to connect scrum masters to one another. 
                This team project was created using agile methodologies. 
                Hosted by Heroku. 
              </p>
              <div class = 'project_tags'>
                <span class = 'project_tag'>JavaScript</span>
                <span class = 'project_tag'>HTML</span>
                <span class = 'project_tag'>CSS</span>
              </div>
            </div>
            <div class = 'project'>
              <div class = 'project_name'>
                <a href = 'https://github.com/ChaseD13/TwilioMessenger-Desktop' target = '_blank' class = 'arrow_link'>Twilio Desktop Messenger</a>
              </div>
              <p>
                A project to check if a user is still logged in at work after 5pm. 
                If they are, the app sends a randomly selected message to a person of their choosing that they are going to be late.  
              </p>
              <div class = 'project_tags'>
                <span class = 'project_tag'>PowerShell</span>
              </div>
            </div>

          </div>
        </section>


        <footer class = 'footer'>
          <div id = 'footer_cc'>
            <div id = 'footer_cc_top'>
              <span>Coded by:</span>
            </div>
            <div id = 'footer_cc_bot'>
              <span>Chase Dudas</span>
            </div>
          </div>
          <div id = 'footer_links'>
            <a href = 'https://github.com/ChaseD13' target = '_blank' title = 'github'></a>
          </div>
        </footer>


      </div>
    );
  }
}
 
export default App;