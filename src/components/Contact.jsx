import Navbar from "../Navbar";

const Contact = () => {
    return (<div className="contact-page">
        <Navbar/>
        <h1>Contact me </h1>
        <div className="contact-form">
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="phone" />
                <input type="submit" value="Ping me" />
            </form>
        </div>


    </div> );
}
export default Contact;