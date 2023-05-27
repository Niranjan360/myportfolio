import Navbar from "./Navbar";
import pic from './pic2.jpg'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'
import node from './node.png'


const Home = () => {
    return (<div>
        <Navbar/>
        <div className="dashboard">
            <div className="db1">
                <h1>Hi I'am <span>Niranjan</span> Web Designer</h1>
                <div>
                <button>Contact me</button>
                </div>
            </div>
            <div className="db2">
                <img src={pic} alt="my pic" />
            </div>
        </div>
        <div className="skills">
            <h1>IT Proficiency</h1>
            <div className="cards">
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
    </div>);
}
export default Home;