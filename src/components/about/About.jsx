import "./about.scss"
import { motion, useInView } from "framer-motion"
import React, { useRef, useState } from 'react';

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

const About = () => {
    return (
        <motion.div className="about" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <h1 className="header">
                    About Me
                </h1>

                <p className="paragraph">
                    Hi, I'm Thomas Pearson - an ambitious and passionate web developer eager to make my mark in the 
                    software developement world. As a Junior at Salisbury University, I'm continually honing my skills
                    and pushing the boundaries of what I can create.
                </p>

                <p className="paragraph">
                    This project represents my journey into React while reinforcing my expertise in HTML, CSS, and Javascript.
                    I thrive on solving problems, crafting intuitive user experiences, and learning new technologies to stay ahead
                    in this ever-evolving field.
                </p>

                <p className="paragraph">
                    If you're looking for someone who combines creativity, dedication, and a genuine love for development,
                    I'd be thrilled to connect! Feel free to reach out via email or phone to discuss how I can contribute 
                    to your team.
                </p>

            </motion.div>
        </motion.div>
    )
};

export default About