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
              <input type="text" required placeholder="Name" name="name" />
              <input type="email" required placeholder="Email" name="name" />
            </div>
            <textarea
              id=""
              cols="30"
              rows={8}
              placeholder="message"
              name="message"
            ></textarea>
            <button>Send</button>
            {error && "Error"}
            {success && "You're message has been sent!"}
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
