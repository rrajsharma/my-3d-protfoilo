import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="background-container">
      <div className="background-blur blur-1"></div>
      <div className="background-blur blur-2"></div>

      <div className="footer-content">
        <h1 className="footer-heading">Creative Dev</h1>
        <hr className="footer-divider" />
        <div className="footer-links">
          <h1><a
              href="https://github.com/rrajsharma"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github
            </a></h1>
          <h1><a
              href="https://www.linkedin.com/in/raj-sharma8817/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin
            </a></h1>
          <h1><a
              href="https://x.com/code_with_raj_8"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter
            </a></h1>
          <h1><a
              href="https://www.instagram.com/code_with_raj_8/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram
            </a></h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
