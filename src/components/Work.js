import React from "react";
import "./Work.css";

function Work(props) {
  return (
    <div
      id="work"
      style={{ minHeight: "120vh", backgroundColor: "var(--primary-color)" }}
      className="d-flex flex-row"
    >
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
        <h2 class="head-text ">
          My Creative <span>Portfolio </span>Section
        </h2>
        <div
          className="row d-flex justify-content-center gap-3 app__work-portfolio"
          style={{ width: "80%" }}
        >
          <div
            class="my-project m-3 col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <div class="app__work-item app__flex">
              <div class="app__work-img app__flex">
                <img src={require("../images/dashboard-analytics.png")} />
                <div class="app__work-hover app__flex">
                  <a
                    href="https://dashboard-analytics-sunny-0ea28ea8bba0.herokuapp.com/analytics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://github.com/sunny-ops/Dashboard-analytics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div class="app__work-content app__flex">
                <h4 class="bold-text">The dashboard platform</h4>
                <p class="p-text" style={{ marginTop: "10px" }}>
                  Material Design React Admin Dashboard Template – is the most
                  developer friendly &amp; highly customizable Admin Dashboard
                  Template based on MUI v5.
                </p>
                <div class="app__work-tag app__flex">
                  <p class="p-text">ReactJs</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="my-project m-3 col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <div class="app__work-item app__flex">
              <div class="app__work-img app__flex">
                <img src={require("../images/shi-homemade.png")} />
                <div class="app__work-hover app__flex">
                  <a
                    href="https://shiecommerceapp.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://github.com/sunny-ops/e-Commerce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div class="app__work-content app__flex">
                <h4 class="bold-text">Homemade E-commerce platform</h4>
                <p class="p-text" style={{ marginTop: "10px" }}>
                  a full-stack e-commerce website using MERN stack (MongoDB,
                  Express, ReactJS, NodeJS) for a small business selling
                  handmade snacks
                </p>
                <div class="app__work-tag app__flex">
                  <p class="p-text">NodeJs</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="my-project m-3 col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <div class="app__work-item app__flex">
              <div class="app__work-img app__flex">
                <img src={require("../images/wander-lust.png")} />
                <div class="app__work-hover app__flex">
                  <a
                    href="https://wander-lust-journeys-sunny.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://github.com/sunny-ops/WanderLustJourneys"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div class="app__work-content app__flex">
                <h4 class="bold-text">Wander-lust journey</h4>
                <p class="p-text" style={{ marginTop: "10px" }}>
                  Wander-Lust Journey is a captivating portal dedicated to
                  showcasing destinations from around the globe. With a blend of
                  intricate animations and dazzling special effects, the website
                  offers an immersive experience.
                </p>
                <div class="app__work-tag app__flex">
                  <p class="p-text">Javascript</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="my-project m-3 col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <div class="app__work-item app__flex">
              <div class="app__work-img app__flex">
                <img src="https://cdn.sanity.io/images/w1h2v7s6/production/28595b676dfa369c359a712193944b13e610db1d-600x341.png" />
                <div class="app__work-hover app__flex">
                  <a
                    href="https://eyewear-ecommerce-sunny.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://github.com/sunny-ops/Eyewear-Ecommerce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div class="app__work-content app__flex">
                <h4 class="bold-text">Eyeware Ecommerce</h4>
                <p class="p-text" style={{ marginTop: "10px" }}>
                  Buying eyewear should leave you happy and good-looking, with
                  money in your pocket. Glasses, sunglasses, and contacts—we’ve
                  got your eyes covered.
                </p>
                <div class="app__work-tag app__flex">
                  <p class="p-text">ReactJs</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="my-project m-3 col-lg-3 col-12"
            style={{ opacity: "1", transform: "none" }}
          >
            <div class="app__work-item app__flex">
              <div class="app__work-img app__flex">
                <img src="https://cdn.sanity.io/images/w1h2v7s6/production/d37e46ba616dc761b18201da504ffcacd048ab8f-500x318.png" />
                <div class="app__work-hover app__flex">
                  <a
                    href="https://weather-stack-sunny.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://github.com/sunny-ops/web-dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="app__flex" style={{ transform: "none" }}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div class="app__work-content app__flex">
                <h4 class="bold-text">WeatherStack</h4>
                <p class="p-text" style={{ marginTop: "10px" }}>
                  Get current weather information, historical data and forecasts
                  using weatherstack - a free world weather REST API supporting
                  millions of global locations.
                </p>
                <div class="app__work-tag app__flex">
                  <p class="p-text">HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p class="p-text"> @2023 Shi Zhong </p>
          <p class="p-text"> All rights reserved </p>
        </div>
      </div>
      <div class="navigation">
        <a href="#home" class="app__navigation-dot"></a>
        <a href="#about" class="app__navigation-dot"></a>
        <a
          href="#work"
          class="app__navigation-dot"
          style={{ backgroundColor: "rgb(49, 59, 172)" }}
        ></a>
        <a href="#skills" class="app__navigation-dot"></a>

        <a href="#contact" class="app__navigation-dot"></a>
      </div>
    </div>
  );
}

export default Work;
