import "./Footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <span className="copyright">
        Website made with React. Copyright © {getCurrentYear()} Manuel Choi.
      </span>
      <span className="icons">
        <a href="https://www.linkedin.com/in/manuel-c-097b90181/">
          <img src="Logos/Linkedin.png" />
        </a>
        <a href="https://www.github.com/manzbit">
          <img src="Logos/Github.png" />
        </a>
        <a href="https://www.instagram.com/manzbit">
          <img src="Logos/Instagram.png" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
