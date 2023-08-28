import Navbar from "./Navbar";
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import node from './images/node.png'
import portfolio from './images/portfolio.webp'
import org from './images/org.png'
import ext from './images/ext.png'
import persnal from './images/persnolapp.png'



import Contact from "./components/Contact";
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
                        <p>Have a good knowlwdge on core java concepts with a strong hold on object oriented programming language</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="java" />
                    </div>
                    <div>
                        <img src={html} alt="java" />
                        <p>Have a good knowlwdge on core java concepts with a strong hold on object oriented programming language</p>
                    </div>
                    <div>
                        <p>Have a good knowlwdge on core java concepts with a strong hold on object oriented programming language</p>
                        <img src={css} alt="java" />
                    </div>
                    <div>
                        <img src={js} alt="java" />
                        <p>Have a good knowlwdge on core java concepts with a strong hold on object oriented programming language</p>
                    </div>
                    <div>
                        <p>Have a good knowlwdge on core java concepts with a strong hold on object oriented programming language</p>
                        <img src={react} alt="java" />
                    </div>
                    <div>
                        <img src={node} alt="java" />
                        <p>Have a good knowlwdge on core java concepts with a strong hold on object oriented programming language</p>
                    </div>
                    <div>
                        <p>Have a good knowlwdge on core java concepts with a strong hold on object oriented programming language</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="java" />
                    </div>
                </div>
            </div>
        </div>

        <hr />

        <div className="about">
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

        <div className="home-contact">
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

        <div className="projects">
            <h1>PROJECTS</h1>
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