import Navbar from "./Navbar";
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import node from '../images/node.png'
import expressjs from '../images/expressjs.webp'
import bootstrap from '../images/bootstrap.png'
import tech from '../assets/tech.mp4'


import portfolio from '../images/portfolio.webp'
import org from '../images/org.png'
import ext from '../images/ext.png'
import persnal from '../images/persnolapp.png'
import Contact from "./Contact.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {

    useEffect(()=>{
        AOS.init({duration:1000});
    } , [])


    return (<div>
                <div className="dashboard">
                    <div className="db1">
                        <h1>Hi I'am <span>Niranjan</span> React Developer</h1>
                        <div>
                        {/* <button>Contact me</button> */}
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 36 36"
                                width="36px"
                                height="36px"
                            >
                                <rect width="36" height="36" x="0" y="0" fill="#fdd835"></rect>
                                <path
                                fill="#e53935"
                                d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                                ></path>
                                <path
                                fill="#b71c1c"
                                d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                                ></path>
                                <path
                                fill="#212121"
                                d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                                ></path>
                                <path
                                fill="#01579b"
                                d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                                ></path>
                                <path
                                fill="#212121"
                                d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                                ></path>
                                <path
                                fill="#81d4fa"
                                d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                                ></path>
                                <path
                                fill="#212121"
                                d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                                ></path>
                                <path
                                fill="#e1f5fe"
                                d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                                ></path>
                            </svg>
                            <span class="now">Me!</span>
                            <span class="play">Contact</span>
                        </button>

                        </div>
                    </div>
                    <div className="db2" data-aos="zoom-in">
                    </div>
                </div>

                <div className="skills">
                    <h1>IT Proficiency</h1>
                    <div className="skill-cont">
                        <div className="sider" >
                        </div>
                        <div className="cards" data-aos="fade-left">
                            <div>
                                <p>Skilled in Core Java, object-oriented programming, data structures, and algorithm design. Proficient in debugging, optimizing code performance, and ensuring quality through unit testing and coding best practices.</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="java" />
                            </div>
                            <div>
                                <img src={html} alt="java" />
                                <p>Skilled in crafting clean, semantic HTML5 for cross-browser compatibility. Proficient in multimedia, forms, and SEO-friendly semantic tags. Capable with CSS and JavaScript for enhanced interactivity and design.</p>
                            </div>
                            <div>
                                <p>CSS expert with mastery in CSS3, excelling in visually appealing and responsive designs. Proficient in Bootstrap, Sass, and adept at intricate layouts, animations, and cross-browser compatibility for precision.</p>
                                <img src={css} alt="css" />
                            </div>
                            <div>
                                <img src={js} alt="javascript" />
                                <p></p>
                            </div>
                            <div>
                                <p>Skilled in React.js for dynamic, interactive web apps with Redux for state management, API integration, and optimizing performance. Proficient in component-based UI development and React Hooks usage.</p>
                                <img src={react} alt="react" />
                            </div>
                            <div>
                                <img src={node} alt="node" />
                                <p>Node.js expert with Express.js for web apps/RESTful APIs. Proficient in SQL/NoSQL databases, security implementation, performance optimization, and cloud deployment for efficient, scalable solutions.</p>
                            </div>
                            <div>
                                <p>Skilled in building scalable server-side apps with Express.js on Node.js, specializing in RESTful API design, middleware, routing, and adept at integrating SQL/NoSQL databases for secure authentication.</p>
                                <img src={expressjs} alt="express" />
                            </div>
                            <div>
                                <p>Skilled in Bootstrap, I craft sleek, responsive web interfaces using its robust framework. I adeptly customize themes, ensuring a cohesive, branded look with cross-browser compatibility.</p>
                                <img src={bootstrap} alt="bootstrap" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="about" name="more">
                    <div>
                        <h1 data-aos="fade-left">About my <span>WORK</span></h1>
                        <p data-aos="fade-right">I am a front end web developer and a passionate trainer , i have been 
                            in 2 internal projects of an organization and i have trained more than <span>4000+</span> 
                            engineering graduates on <span>HTML</span> , <span>CSS</span> and <span>JS</span> and <span>2000+</span> students on <span>React JS</span>
                        </p>
                        <img  data-aos="fade-up-left" src="https://cdn.dribbble.com/users/2403158/screenshots/5841419/how_to_get_support_2.gif" alt="" />
                    </div>
                    <div>
                        <img  data-aos="fade-up-right" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmVsYnk3enVtY3RseHo4bWg0bmQ2czE1aG5rM210YTBpaGN4cTgxaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif" alt="dev" />
                    </div>
                </div>

                <div className="home-contact" name="contact-me">
                    <div  data-aos="fade-down">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="What are you looking for?" />
                            <input type="checkbox"/>
                            <label>Can we Connect through call ?</label>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div>
                        <h1 data-aos="fade-left">Contact me</h1>
                    </div>
                </div>

                <div className="socialmedia-cont">
                    <div class="parent">
                        <div class="card">
                            <div class="social-logo">
                                <span class="circle circle1"></span>
                                <span class="circle circle2"></span>
                                <span class="circle circle3"></span>
                                <span class="circle circle4"></span>
                                <span class="circle circle5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" class="svg">
                                        <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                                        <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                                        <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                                    </svg>
                                </span>

                            </div>
                            <div class="glass"></div>
                            <div class="content">
                                <span class="title">Social Links ): </span>
                                <span class="text">Connect , learn , grow</span>
                            </div>
                            <div class="bottom">
                                
                                <div class="social-buttons-container">
                                    <button class="social-button .social-button1">
                                        <a href="https://www.instagram.com/niranjan_gowda360/">
                                        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                        </svg>
                                        </a>
                                    </button>
                                    <button class="social-button .social-button2">
                                        <a href="https://www.facebook.com/niranjan.niru.14473">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
                                        </a>
                                    </button>
                                    <button class="social-button .social-button3">
                                        <a href="https://www.linkedin.com/in/niranjan-m-79440b120/">
                                            <svg xmlns="http://www.w3.org/2000/svg"className="svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                        </a>
                                    </button>
                                </div>
                                <div class="view-more">
                                    <button class="view-more-button">View more</button>
                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects" name="projects">
                    {/* <video src={tech} loop autoPlay muted></video> */}
                    <div className="card_box" data-aos="fade-down-left" data-aos-delay="000">
                        <span></span>
                        <img src={portfolio} alt="portfolio" />
                    </div>
                    <div className="card_box"  data-aos="fade-down-left" data-aos-delay="200">
                        <span></span>
                        <img src={org} alt="portfolio" />
                    </div>
                    <div className="card_box"  data-aos="fade-down-left" data-aos-delay="400">
                        <span></span>
                        <img src={ext} alt="portfolio" />
                    </div>
                    <div className="card_box"  data-aos="fade-down-left" data-aos-delay="600">
                        <span></span>
                        <img src={persnal} alt="portfolio" />
                    </div>
                </div>
    </div>);
}
export default Home;