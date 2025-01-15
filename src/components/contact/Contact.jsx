import "./contact.scss"
import { motion } from "framer-motion"

const variants={
    initial:{
        y:500,
        opacity:0,

    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
}

const Contact = () => {
    return (
        <motion.div className="contact" variants={variants}>
            <motion.div className="textContainer">
                <h1>Let's work together</h1>

                <div className="item">
                    <h2>Mail</h2>
                    <span>pearson.e.thomas@gmail.com</span>
                </div>

                <div className="item">
                    <h2>Addresses</h2>
                    <span>Hebron, MD</span>
                    <br></br>
                    <span>Philadelphia, PA</span>
                </div>

                <div className="item">
                    <h2>Phone</h2>
                    <span>443-509-0020</span>
                </div>

            </motion.div>

            <div className="formContainer">
                <form>
                    <input type="text" required placeholder="Name" />
                    <input type="text" required placeholder="Email" />
                    <textarea rows={8} placeholder="Message" />
                    <button>Submit</button>
                </form>
            </div>

        </motion.div>
    )
}

export default Contact