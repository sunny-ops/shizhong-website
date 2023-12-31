import React from "react";
import "./About.css";
function About(props) {
  return (
    <div id="about" style={{ minHeight: "100vh" }} className="d-flex flex-row">
      <div className="social">
        <div>
          <a href="https://www.linkedin.com/in/shi-zhong-bb94a4229/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a href="https://github.com/sunny-ops">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="app__wrapper app__flex" style={{ position: "relative" }}>
        <h2 class="head-text">
          I Know that <span>Good Development</span> <br />
          means &nbsp;
          <span>Good Developer</span>
        </h2>
        <div
          className="row d-flex justify-content-center gap-3"
          style={{ width: "90%" }}
        >
          <div
            class="app__profile-item col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/060/157/original/female-graduate-cartoon-free-vector.jpg"
              alt="Master of Computer Science"
              className="mb-3"
            />
            <h2 class="bold-text">Master of Computer Science</h2>
            <p class="p-text">
              I am currently a master's student in computer science. The main
              course includes Data Structure and Algoritham, Operating System
              and Web Development.
            </p>
          </div>
          <div
            class="app__profile-item col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <img
              src="https://cdn.sanity.io/images/w1h2v7s6/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png"
              alt="frontend"
              className="mb-3"
            />
            <h2 class="bold-text">
              Frontend Developer <br /> &nbsp;
            </h2>
            <p class="p-text">
              I am a frontend developer with a passion for building beautiful
              and functional web applications. I am familiar with Javascript,
              React, Redux, and Bootstrap
            </p>
          </div>
          <div
            class="app__profile-item col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <img
              src="https://cdn.sanity.io/images/06fwndg0/production/f3dac452f07d75bacd155b1e1b0d91396f28e817-1610x856.png"
              alt="Full stack"
              className="mb-3"
            />
            <h2 class="bold-text">
              Fullstack Developer <br /> &nbsp;
            </h2>
            <p class="p-text">
              Having a interest in full-stack development, I have honed my
              skills in Node.js, Express, MySQL, and MongoDB, enabling me to
              craft outstanding services.
            </p>
          </div>
          <div
            class="app__profile-item col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:480/1*TtFboLb09Ag9C6hjri6jeQ.jpeg"
              alt="Master of Computer Science"
              className="mb-3"
            />
            <h2 class="bold-text">
              Software Enthusiast <br /> &nbsp;{" "}
            </h2>
            <p class="p-text">
              I'm deeply passionate about solving real-world problems. Each
              project presents a new challenge, driving me to constantly learn
              and adapt.
            </p>
          </div>
        </div>
        <div class="copyright">
          <p class="p-text"> @2023 Shi Zhong </p>
          <p class="p-text"> All rights reserved </p>
        </div>
      </div>
      <div class="navigation">
        <a href="#home" class="app__navigation-dot"></a>
        <a
          href="#about"
          class="app__navigation-dot"
          style={{ backgroundColor: "rgb(49, 59, 172)" }}
        ></a>
        <a href="#work" class="app__navigation-dot"></a>
        <a href="#skills" class="app__navigation-dot"></a>

        <a href="#contact" class="app__navigation-dot"></a>
      </div>
    </div>
  );
}

export default About;
