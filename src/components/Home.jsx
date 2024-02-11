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
    })


    return (<div>
                <div className="dashboard">
                    <div className="db1">
                        <h1>Hi I'am <span>Niranjan</span> React Developer</h1>
                        <div>
                        <button>Contact me</button>
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
                                <p>Proficient in Core Java, with a strong foundation in object-oriented programming, data structures, and algorithm design, enabling the development of robust and efficient software applications. Skilled in debugging, optimizing code performance, and ensuring code quality through unit testing and best coding practices.</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="java" />
                            </div>
                            <div>
                                <img src={html} alt="java" />
                                <p>Proficient in writing clean, semantic HTML code to create and structure web content. Experienced in using HTML5 standards to ensure cross-browser compatibility and mobile responsiveness. Skilled in incorporating multimedia elements, forms, and semantic tags for improved accessibility and SEO. Capable of working with CSS and JavaScript to enhance web page interactivity and design.</p>
                            </div>
                            <div>
                                <p>Proficient in CSS (Cascading Style Sheets) with a strong command of CSS3, adept at crafting visually engaging and responsive web designs. Experienced in implementing complex layouts, animations, and transitions, ensuring cross-browser compatibility and pixel-perfect precision. Skilled in CSS frameworks like Bootstrap and CSS preprocessors like Sass for streamlined development and efficient styling.</p>
                                <img src={css} alt="css" />
                            </div>
                            <div>
                                <img src={js} alt="javascript" />
                                <p>Proficient in modern JavaScript development, employing ES6+ features and best practices to create interactive web applications. Skilled in building and optimizing user interfaces (UI) with the Document Object Model (DOM) and responsive design principles. Capable of using JavaScript libraries and frameworks like React to develop dynamic and efficient front-end solutions.</p>
                            </div>
                            <div>
                                <p>Proficient in building dynamic and interactive web applications using React.js, a leading JavaScript library, to create reusable and component-based user interfaces. Skilled in state management using Redux and managing data flow in complex applications, ensuring optimal performance and maintainability. Experienced in integrating RESTful APIs, optimizing rendering performance, and utilizing React Hooks for functional component development.</p>
                                <img src={react} alt="react" />
                            </div>
                            <div>
                                <img src={node} alt="node" />
                                <p>Proficient in Node.js for server-side JavaScript development, using Express.js to build robust web applications and RESTful APIs. Skilled in integrating various databases, both SQL and NoSQL, and implementing authentication and security measures to protect against common web vulnerabilities. Experienced in optimizing server performance and deploying applications on cloud platforms, ensuring efficient and scalable solutions.</p>
                            </div>
                            <div>
                                <p>Proficient in developing scalable server-side applications using Express.js, a lightweight Node.js framework, with expertise in RESTful API design, middleware implementation, and routing. Capable of integrating various databases, including SQL and NoSQL, to efficiently handle data storage and retrieval, while also ensuring secure user authentication and authorization mechanisms.</p>
                                <img src={expressjs} alt="express" />
                            </div>
                            <div>
                                <p>Proficient in Bootstrap, I leverage its robust framework to design responsive and visually polished web interfaces. I adeptly utilize Bootstrap's pre-built components and customize themes, ensuring a cohesive and branded look while maintaining cross-browser compatibility.</p>
                                <img src={bootstrap} alt="bootstrap" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="about" name="more">
                    <div>
                        <h1 data-aos="fade-left">About my <span>WORK</span></h1>
                        <p data-aos="fade-right">I am a front end web developer and a passionate teacher , i have been 
                            in 2 internal projects of an organization and i have trained more than <span>4000+</span> 
                            engineering graduates on <span>HTML</span> , <span>CSS</span> and <span>JS</span> and <span>2000+</span> students on <span>Recat JS</span>
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

                <div className="projects" name="projects">
                    <video src={tech} loop autoPlay muted></video>
                    <div data-aos="fade-down-left" data-aos-delay="000">
                        Porfolio
                        <img src={portfolio} alt="portfolio" />
                    </div>
                    <div data-aos="fade-down-left" data-aos-delay="200">
                        Interal apps
                        <img src={org} alt="portfolio" />
                    </div>
                    <div data-aos="fade-down-left" data-aos-delay="400">
                        Public api's
                        <img src={ext} alt="portfolio" />
                    </div>
                    <div data-aos="fade-down-left" data-aos-delay="600">
                        Persnal
                        <img src={persnal} alt="portfolio" />
                    </div>
                </div>
    </div>);
}
export default Home;