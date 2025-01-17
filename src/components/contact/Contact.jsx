import "./contact.scss"
import { motion, useInView } from "framer-motion"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    const ref = useRef();
    const formRef = useRef();
    const [error,setError]= useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, {margin: "-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_btmct75', 'template_j1ysu6x', formRef.current, {
            publicKey: 'iImZKuIzTPWAHTyfA',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
              setError(true)
              console.log(error.text)
            },
          );
      };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>

                <motion.div className="item">
                    <h2>Mail</h2>
                    <span>pearson.e.thomas@gmail.com</span>
                </motion.div>

                <motion.div className="item">
                    <h2>Addresses</h2>
                    <span>Hebron, MD</span>
                    <br></br>
                    <span>Philadelphia, PA</span>
                </motion.div>

                {/*<motion.div className="item">
                    <h2>Phone</h2>
                    <span>443-509-0020</span>
                </motion.div>*/}

            </motion.div>

            <div className="formContainer">

            <motion.div 
                className="phoneSvg" 
                initial={{opacity:1}} 
                whileInView={{opacity:0}} 
                transition={{delay: 0, duration: 0}}
            >

            {/* Need to put an svg here for animations */}
    
            </motion.div>

                <motion.form
                    ref={formRef} 
                    onSubmit={sendEmail} 
                    initial={{opacity:0}} 
                    whileInView={{opacity:1}} 
                    transition={{delay: 1, duration: 2}}
                    >
                
                    
                    <input type="text" required placeholder="Name" name="name"/>
                    <input type="text" required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact