import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__textcontainer">
          <h1 className="contact__title">Get In Touch!</h1>
          <h3 className="contact__slogan">
            Want to talk more or get to know me? Feel free to reach out through
            my email and social media or fill out the form below!
          </h3>
        </div>
        <div className="contact__formcontainer">
          <form>
            <div className="contact__name">
              <input type="text" required placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
            </div>
            <div className="contact__info">
              <input type="email" required placeholder="Email"></input>
              <input type="text" placeholder="Phone Number"></input>
            </div>

            <textarea
              name=""
              id=""
              cols="30"
              rows={8}
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
