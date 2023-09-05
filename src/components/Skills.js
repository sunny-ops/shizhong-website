import React from "react";
import "./Skills.css";

function Skills(props) {
  return (
    <div id="skills" style={{ height: "100vh" }} className="d-flex flex-row">
      <div className="social">
        <div>
          <a href="javascript:void(0);">
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
          <a href="javascript:void(0);">
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
        <h2 className="head-text" style={{ margin: "50px" }}>
          Skills & Experiences
        </h2>
        <div className="row" style={{ width: "80%" }}>
          <div className="col-lg-7 col-12">
            <div class="app__skills-list">
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png"
                    alt="JavaScript"
                  />
                </div>
                <p class="p-text">JavaScript</p>
              </div>

              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png"
                    alt="NodeJS"
                  />
                </div>
                <p class="p-text">NodeJS</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/06fwndg0/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png"
                    alt="React"
                  />
                </div>
                <p class="p-text">React</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/06fwndg0/production/905a2a9fd24b3f3aa44c1fab7efaa74729762f93-259x259.png"
                    alt="Java"
                  />
                </div>
                <p class="p-text">Java</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/06fwndg0/production/aa1dc780814cb5c67190adc0b032bf0671309d9c-64x64.png"
                    alt="Python"
                  />
                </div>
                <p class="p-text">Python</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
                    alt="MySQL"
                  />
                </div>
                <p class="p-text">MySQL</p>
              </div>

              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png"
                    alt="git"
                  />
                </div>
                <p class="p-text">git</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/a9060999e44997722d3664c7a4a1a76828de4b66-225x225.jpg"
                    alt="bootstrap5"
                  />
                </div>
                <p class="p-text">bootstrap5</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png"
                    alt="HTML"
                  />
                </div>
                <p class="p-text">HTML</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png"
                    alt="CSS"
                  />
                </div>
                <p class="p-text">CSS</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/a46e60325617611a441bdd58a817545fb62dab84-336x150.jpg"
                    alt="less"
                  />
                </div>
                <p class="p-text">less</p>
              </div>

              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png"
                    alt="Sass"
                  />
                </div>
                <p class="p-text">Sass</p>
              </div>
              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png"
                    alt="Typescript"
                  />
                </div>
                <p class="p-text">Typescript</p>
              </div>

              <div class="app__skills-item app__flex">
                <div class="app__flex">
                  <img
                    src="https://cdn.sanity.io/images/w1h2v7s6/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png"
                    alt="Redux"
                  />
                </div>
                <p class="p-text">Redux</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div class="app__skills-exp">
              <div class="app__skills-exp-item">
                <div class="app__skills-exp-year">
                  <p class="bold-text">09/2021 - Present</p>
                </div>
                <div class="app__skills-exp-works">
                  <div
                    class="app__skills-exp-work"
                    data-tip="true"
                    data-for="Frontend Developer"
                    // style="opacity: 1;"
                  >
                    <h4 class="bold-text">Associate Research Scientist</h4>
                    <p class="p-text">Hohai University</p>
                  </div>
                </div>
              </div>
              <div class="app__skills-exp-item">
                <div class="app__skills-exp-year">
                  <p class="bold-text">09/2021 - Present</p>
                </div>
                <div class="app__skills-exp-works">
                  <div
                    class="app__skills-exp-work"
                    data-tip="true"
                    data-for="Frontend Developer"
                    // style="opacity: 1;"
                  >
                    <h4 class="bold-text">Computer Science Master Student</h4>
                    <p class="p-text">Northeastern University</p>
                  </div>
                </div>
              </div>
              <div class="app__skills-exp-item">
                <div class="app__skills-exp-year">
                  <p class="bold-text">04/2023 - 07/2023</p>
                </div>
                <div class="app__skills-exp-works">
                  <div
                    class="app__skills-exp-work"
                    data-tip="true"
                    data-for="FullStack Developer"
                    // style="opacity: 1;"
                  >
                    <h4 class="bold-text">Software Develop Engineer Intern</h4>
                    <p class="p-text">Solvd Inc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p class="p-text"> @2023 Sunny </p>
          <p class="p-text"> All rights reserved </p>
        </div>
      </div>
      <div class="navigation">
        <a href="#home" class="app__navigation-dot"></a>
        <a href="#about" class="app__navigation-dot"></a>
        <a href="#work" class="app__navigation-dot"></a>
        <a
          href="#skills"
          class="app__navigation-dot"
          style={{ backgroundColor: "rgb(49, 59, 172)" }}
        ></a>

        <a href="#contact" class="app__navigation-dot"></a>
      </div>
    </div>
  );
}

export default Skills;
