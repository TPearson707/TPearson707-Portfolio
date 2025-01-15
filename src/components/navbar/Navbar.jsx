import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <span></span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/thomas-pearson-b85ab122b/"><img src="/linkedin.png" alt="linkedin.png not found" className="linkedin-logo" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100007591685163/"><img src="/facebook.png" alt="facebook.png not found" /></a>
                    <a href="https://www.instagram.com/tpearson707/"><img src="/instagram.png" alt="instagram.png not found" /></a>
                </div> 
            </div>
        </div>
    )
}

export default Navbar
