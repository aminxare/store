import { Instagram, Telegram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <p>
      Built by{" "}
      <Link to='/' className="footer__link">
        Ali Zare
      </Link>
      . Copyright &copy; by Ali Zare.
    </p>
    <p className="email">amin.xare@outlook.com</p>
    <div className={classes['footer__social']}>
    <Twitter style={{fill:'#fff',margin:"0 3px"}}/>
    <Instagram style={{fill:'#fff',margin:"0 3px"}}/>
    <Telegram style={{fill:'#fff',margin:"0 3px"}}/>
    </div>
  </footer>
  );
};

export default Footer;