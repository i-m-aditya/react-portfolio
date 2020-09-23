import React, { Component } from 'react';
import Ticker from 'react-ticker';
import BookmarkIcon from '@material-ui/icons/Bookmark';

class Resume extends Component {

  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
            <Ticker mode="smooth">
                {({ index }) => (
                  <>
                    <a className="ticker" href="https://drive.google.com/file/d/1L9nkqyoel3IvEmHwNL1p_NhqwaBq92T4/view?usp=sharing" target="_blank">
                      <i class="fa fa-bookmark" aria-hidden="true"></i>
                      <h1 style={{fontFamily: "Dancing Script"}}>Check out my resume for more details !</h1>
                      <i class="fa fa-bookmark" aria-hidden="true"></i>
                    </a>
                      {/* <img src="www.my-image-source.com/" alt=""/> */}
                  </>
                )}
            </Ticker>
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

              <p>{skillmessage}
              </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">

          <h1> <span>Competitive Coding</span> </h1>
        </div>
        {/* <div className="row competitive"> 
          <div className="six columns container">
                <div className="codeforces">
                  <img alt="" src="../images/portfolio/codeforces.png" />
                </div> 
                <div className="codeforces-overlay">

                  <h5>Codeforces</h5>
                  <p>Expert</p>
                </div>
                <div className="link-icon1"><i className="fa fa-link"></i></div>
          </div>
          <div className="six columns">
          </div>
        </div> */}

        <div className="row cp">
          <div className="six columns cp-item">
            <div className="cp-item-wrap">
              <a href="https://codeforces.com/profile/v_for_vendatta" title="Codeforces">
              <img alt="" src="../images/portfolio/codeforces.png" />
              <div className="cp-overlay">
                <div className="cp-item-meta">
                  <h5>Codeforces</h5>
                  <p>Max. Rating: 1747</p>
                </div>
              </div>
              <div className="cp-link-icon"><i className="fa fa-link"></i></div> 
              </a>
            </div>
          </div>
          <div className="six columns cp-item">
            <div className="cp-item-wrap">
              <a href="https://www.codechef.com/users/aditya02" title="Codeforces">
              <img alt="" src="../images/portfolio/codechef.png" />
              <div className="cp-overlay">
                <div className="cp-item-meta">
                  <h5>Codechef</h5>
                  <p>Max. Rating: 1995</p>
                </div>
              </div>
              <div className="cp-link-icon"><i className="fa fa-link"></i></div> 
              </a>
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Resume;
