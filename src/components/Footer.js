import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Made by
          <a className="git" href="https://github.com/mdlugosz1">
            <i className="fab fa-github"></i>
          </a>
        </p>
        <p>
          Site uses gwent one API to fetch images which can be found{' '}
          <a className="api" href="https://api.gwent.one">
            here
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
