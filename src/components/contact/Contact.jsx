import "./Contact.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_05pi1di", "template_6y0m3vk", formRef.current, {
        publicKey: "omE7yRunBXBXZvNRY",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <>
      <motion.div
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="contact__textcontainer" variants={variants}>
          <motion.h1 className="contact__title" variants={variants}>
            Get In Touch!
          </motion.h1>
          <motion.h3 className="contact__slogan" variants={variants}>
            Want to talk more or get to know me? Feel free to reach out through
            my email and social media or fill out the form below!
          </motion.h3>
        </motion.div>
        <div className="contact__formcontainer">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="contact__info">
              <div className="contact__name">
                <p className="contact__label-name">Your Name</p>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
              <div className="contact__email">
                <p className="contact__label-email">Your Email</p>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  name="name"
                />
              </div>
            </div>
            <p className="contact__label-message">Your Message</p>
            <textarea
              id=""
              cols="30"
              rows={8}
              placeholder="Enter your message"
              name="message"
            ></textarea>
            <button>
              <span className="contact__send">Send</span>
              <img
                src="/src/assets/decorations/rightarrow.svg"
                className="contact__arrow"
              />
            </button>
            {error && "Error"}
            {success && "You're message has been sent!"}
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
