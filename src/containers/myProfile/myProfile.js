import React, { Component } from 'react';
import './myProfile.scss';
import myImage from '../../assets/images/me.jpg';

class MyProfile extends Component {

  render() {
    return (
      <div className="my-profile-wrap">
        <div className="title">SARIDA JONGBURI {'<' + 'MOOK' + '>'}</div>
        <div className="block1">
          <div className="text-wrap">
            <div className="text-group">
              <div className="sub-title">Front-end Developer</div>
            </div>
            <div className="text-group">
              <div className="sub-title">Skills</div>
              <p>Databases : MySQL</p>
              <p>Programing Languages : JavaScript, TypeScript, Java, Php, HTML, CSS, SCSS</p>
              <p>Framework or Library : React (Usage with Redux), Angular, Node.js, Express, Spring boot</p>
              <p>UI : Material-UI, Bootstrap, Chart.js, D3</p>
              <p>Others : Responsive, Git, Basic Linux commands</p>
            </div>
          </div>
          <div className="image-wrap">
            <div className="image-shadow"></div>
            <img className="image" src={myImage} />
          </div>
        </div>
        <div className="block2">
          <div className="text-wrap">
            <div className="text-group">
              <div className="sub-title">Education</div>
            </div>
            <div className="text-group">
              <p>Prince of Songkla University Hat Yai Campus</p>
              <p>Faculty of Science (Computer Science)</p>
              <p>GPA: 3.16</p>
            </div>
            <div className="text-group">
              <div className="sub-title">Work Experience</div>
            </div>
            <div className="text-group">
              <div className="text-highlight">INTERNSHIP (G-ABLE CO., LTD.)</div>
              <p>Timeless Ensembles : May 2018 – July 2018</p>
              <p>Developed web application (React and Node.js)</p>
            </div>
          </div>
          <div style={{ width: "5px", margin: "0 20px", backgroundColor: "#66fcf1" }}></div>
          <div className="text-wrap">
            <div className="text-group">
              <div className="text-highlight">FRONT END DEVELOPER (TECHNIMAL CO., LTD.)</div>
              <p>Timeless Ensembles : Jun 2019 – Jan 2020</p>
              <p>Developed web application for industrial Iot. (React)</p>
            </div>
            <div className="text-group">
              <div className="text-highlight">APPLICATION DEVELOPER (G-ABLE CO., LTD.)</div>
              <p>Timeless Ensembles : Feb 2020 – Now</p>
              <p>Developed web application for data analytics platform. (Angular, Spring boot)</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MyProfile; 