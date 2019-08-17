import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, NavDropdown, Navbar, Menu } from 'react-bootstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap/DropdownButton'

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
            , a ... of a coder 
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
              As a software engineer, I ... 
              My goal is ...
            </p>
            <p>
              <strong>When I am not working,</strong>
              I am either out taking photos, going for a bike ride, or hanging out with my friends. I also love to game. 
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


        <section id = 'skillsSection' data-sr-id = '2'>
          <div class = 'section_title'>Skills</div>
          <div class = 'section_content'>
            <div id = 'skills_table'>
              <div class = 'skills_category'>
                <div class = 'skills_category_header'>Languages</div>
                <ul>
                  <li class = 'skills_category_item'>C++</li>
                  <li class = 'skills_category_item'>Python</li>
                  <li class = 'skills_category_item'>Scala</li>
                  <li class = 'skills_category_item'>JavaScript</li>
                </ul>
              </div>
              <div class = 'skills_category'>
                <div class = 'skills_category_header'>Frameworks</div>
                <ul>
                  <li class = 'skills_category_item'>React</li>
                  <li class = 'skills_category_item'>Node</li>
                </ul>
              </div>
              <div class = 'skills_category'>
                <div class = 'skills_category_header'>Tools</div>
                <ul>
                  <li class = 'skills_category_item'>Git/GitHub</li>
                </ul>
              </div>
              <div class = 'skills_category'>
                <div class = 'skills_category_header'>Design</div>
                <ul>
                  <li class = 'skills_category_item'>IDK</li>
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
                  <img src = './images/UILabCapture.png' alt></img>
                </a>
              </figure>
              <figcaption class = 'highlighted_project_caption'>
                <div class = 'highlighted_project_name'>
                  <a href = 'https://github.com/donaldsonlab/UI-lab-capture' target = '_blank'>UI Lab Capture</a>
                </div>
                <p>
                  Well...What does it do?
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
                <a href = '' target = '_blank' class = 'arrow_link'>Project Title</a>
              </div>
              <p>
                This is an example paragraph to describe the project.
              </p>
              <div class = 'project_tags'>
                <span class = 'project_tag'>C++</span>
                <span class = 'project_tag'>Python</span>
                <span class = 'project_tag'>Scala</span>
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