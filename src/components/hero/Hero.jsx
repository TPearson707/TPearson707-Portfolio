import "./hero.scss"
import { motion, transform } from "framer-motion"

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        },
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        },
    },
    scrollAnimation: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial:{
        x: 0,
    },

    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>THOMAS PEARSON</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer and UI designer</motion.h1>

                    <motion.div variants={textVariants} className="buttons" >

                        <motion.a // link to my Github
                        href="https://github.com/TPearson707"
                        target="_blank"
                        variants={textVariants}
                        className="buttons"
                        buttons
                        >See my Latest Works</motion.a>

                        {/* <motion.button // Create an animated email sender thing
                        variants={textVariants}>
                            Contact Me
                        </motion.button> */}
                        
                        <motion.a // Download resume 
                        href="/ThomasPearsonResume.pdf" 
                        download="ThomasPearsonResume.pdf" 
                        variants={textVariants} 
                        className="buttons"
                        buttons
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                    
                    <motion.img variants={textVariants} animate="scrollAnimation" src="/scroll.png" alt=""/>

                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Junior Software Engineer
            </motion.div>

            <div className="imageContainer">
                
            </div>
        </div>
    )
}
<img src="/hero.png" alt="" />
export default Hero
